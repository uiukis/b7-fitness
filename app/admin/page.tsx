"use client";

import { useAuth } from "hooks/useAuth";
import { uploadImage } from "lib/uploadImage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { deleteImage } from "lib/deleteImage";
import { useImages } from "hooks/useImages";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import { Section } from "./components/Section";
import { ConfirmationPopup } from "./components/ConfirmationPopup";
import { ImageGallery } from "./components/ImageGallery";
import { ImageUploader } from "./components/ImageUploader";
import SplashScreen from "components/SplashScreen";

export default function Admin() {
  const { user, loading } = useAuth();
  const [files, setFiles] = useState<File[]>([null as unknown as File]);
  const { images: carouselImages, loadImages: loadCarouselImages } =
    useImages("carousel-images");
  const { images: backgroundImages, loadImages: loadBackgroundImages } =
    useImages("background-images");
  const [uploadingImages, setUploadingImages] = useState<boolean[]>([]);
  const [deletingImage, setDeletingImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);
  const [isSplashLoaded, setIsSplashLoaded] = useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newFiles = [...files];

    if (e.target.files?.[0]) {
      newFiles[index] = e.target.files[0];
      if (index === newFiles.length - 1) {
        newFiles.push(null as unknown as File);
      }
    }

    setFiles(newFiles);
  };

  const handleSubmit = async (e: React.FormEvent, index: number) => {
    e.preventDefault();
    if (!files[index]) return;

    const newUploadingStates = [...uploadingImages];
    newUploadingStates[index] = true;
    setUploadingImages(newUploadingStates);

    try {
      await uploadImage(
        files[index],
        activeSection === "carousel" ? "carousel-images" : "background-images"
      );
    } finally {
      newUploadingStates[index] = false;
      setUploadingImages([...newUploadingStates]);
    }

    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    if (activeSection === "carousel") {
      loadCarouselImages();
    } else if (activeSection === "background") {
      loadBackgroundImages();
    }
  };

  const handleConfirmDelete = async () => {
    if (!imageToDelete) return;

    setDeletingImage(imageToDelete);
    await deleteImage(
      imageToDelete,
      activeSection === "carousel" ? "carousel-images" : "background-images"
    );
    setDeletingImage(null);
    setIsPopupOpen(false);
    setImageToDelete(null);

    if (activeSection === "carousel") {
      loadCarouselImages();
    } else if (activeSection === "background") {
      loadBackgroundImages();
    }
  };

  useEffect(() => {
    if (!backgroundImages.length) {
      loadBackgroundImages();
      loadCarouselImages();
    }
  }, [backgroundImages, loadBackgroundImages, loadCarouselImages]);

  const handleSplashLoaded = () => {
    setIsSplashLoaded(true);
  };

  if (
    loading ||
    !backgroundImages.length ||
    !carouselImages.length ||
    !isSplashLoaded
  ) {
    return <SplashScreen onLoaded={handleSplashLoaded} />;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="fixed top-0 left-0 h-[120vh] w-[120vw] bg-[linear-gradient(to_top,rgba(0,0,0,0.75)_80%,theme(colors.orange.900))]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" relative p-8 max-w-4xl mx-auto z-50"
      >
        <h1 className="text-3xl font-bold mb-8">Admin</h1>
        <p className="mb-4">Bem-vindo, {user?.email}!</p>
        <Section
          title="Background"
          isActive={activeSection === "background"}
          onClick={() =>
            setActiveSection(activeSection === "background" ? "" : "background")
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ImageGallery
              images={backgroundImages}
              deletingImage={deletingImage}
              onDelete={(imageName) => {
                setImageToDelete(imageName);
                setIsPopupOpen(true);
              }}
            />
            {files.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative p-4 rounded-lg"
              >
                <div className="w-52 h-60 flex items-center justify-center border border-gray-300 rounded-md">
                  {uploadingImages[index] ? (
                    <AiOutlineLoading3Quarters className="text-4xl animate-spin text-gray-500" />
                  ) : file ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        onClick={(e) => handleSubmit(e, index)}
                        className="absolute flex bg-green-700 bottom-1 left-1 p-2 rounded-full items-center gap-1"
                      >
                        <FaCheck />
                        <p className="font-bold">Enviar</p>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          const updatedFiles = files.filter(
                            (_, i) => i !== index
                          );
                          setFiles(updatedFiles);
                        }}
                        className="absolute bg-black top-1 right-4 p-1 rounded-full z-50"
                      >
                        <FaTimes />
                      </motion.button>
                      <Image
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        width={208}
                        height={240}
                        className="w-full h-full object-cover rounded-md"
                        onClick={() =>
                          document
                            .getElementById(`file-input-${index}`)
                            ?.click()
                        }
                      />
                    </>
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
                      onClick={() =>
                        document.getElementById(`file-input-${index}`)?.click()
                      }
                    >
                      <FaPlus className="text-4xl text-slate-500 mb-2" />
                      <p className="text-slate-500">Clique para adicionar</p>
                    </div>
                  )}
                </div>
                <input
                  id={`file-input-${index}`}
                  type="file"
                  onChange={(e) => handleFileChange(e, index)}
                  className="hidden"
                />
              </motion.div>
            ))}
          </div>
        </Section>
        <Section
          title="Carrossel"
          isActive={activeSection === "carousel"}
          onClick={() =>
            setActiveSection(activeSection === "carousel" ? "" : "carousel")
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ImageGallery
              images={carouselImages}
              deletingImage={deletingImage}
              onDelete={(imageName) => {
                setImageToDelete(imageName);
                setIsPopupOpen(true);
              }}
            />

            {files.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative p-4 rounded-lg"
              >
                <div className="w-52 h-60 flex items-center justify-center border border-gray-300 rounded-md">
                  {uploadingImages[index] ? (
                    <AiOutlineLoading3Quarters className="text-4xl animate-spin text-gray-500" />
                  ) : file ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        onClick={(e) => handleSubmit(e, index)}
                        className="absolute flex bg-green-700 bottom-1 left-1 p-2 rounded-full items-center gap-1"
                      >
                        <FaCheck />
                        <p className="font-bold">Enviar</p>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          const updatedFiles = files.filter(
                            (_, i) => i !== index
                          );
                          setFiles(updatedFiles);
                        }}
                        className="absolute bg-black top-1 right-4 p-1 rounded-full z-50"
                      >
                        <FaTimes />
                      </motion.button>
                      <Image
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        width={208}
                        height={240}
                        className="w-full h-full object-cover rounded-md"
                        onClick={() =>
                          document
                            .getElementById(`file-input-${index}`)
                            ?.click()
                        }
                      />
                    </>
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
                      onClick={() =>
                        document.getElementById(`file-input-${index}`)?.click()
                      }
                    >
                      <FaPlus className="text-4xl text-slate-500 mb-2" />
                      <p className="text-slate-500">Clique para adicionar</p>
                    </div>
                  )}
                </div>
                <input
                  id={`file-input-${index}`}
                  type="file"
                  onChange={(e) => handleFileChange(e, index)}
                  className="hidden"
                />
              </motion.div>
            ))}
          </div>
        </Section>
        <Section
          title="Unidades"
          isActive={activeSection === "units"}
          onClick={() =>
            setActiveSection(activeSection === "units" ? "" : "units")
          }
        >
          <ImageGallery
            images={backgroundImages}
            deletingImage={deletingImage}
            onDelete={(imageName) => {
              setImageToDelete(imageName);
              setIsPopupOpen(true);
            }}
          />
          {files.map((file, index) => (
            <ImageUploader
              key={index}
              index={index}
              file={file}
              uploading={uploadingImages[index]}
              onFileChange={handleFileChange}
              onSubmit={handleSubmit}
              onRemove={(index) => {
                const updatedFiles = files.filter((_, i) => i !== index);
                setFiles(updatedFiles);
              }}
            />
          ))}
        </Section>
        <ConfirmationPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      </motion.div>
    </>
  );
}
