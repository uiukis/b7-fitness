"use client";

import { useAuth } from "hooks/useAuth";
import { uploadImage } from "lib/uploadImage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { deleteImage } from "lib/deleteImage";
import { useImages } from "hooks/useImages";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (activeSection === "carousel") {
      loadCarouselImages();
    } else if (activeSection === "background") {
      loadBackgroundImages();
    }
  }, [activeSection, loadCarouselImages, loadBackgroundImages]);

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

  if (loading) return <p className="text-center">Carregando...</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin</h1>
      <p className="mb-4">Bem-vindo, {user?.email}!</p>

      <div className="border rounded-lg overflow-hidden mb-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ backgroundColor: "#1e293b" }}
          onClick={() => setActiveSection("background")}
          className={`w-full text-left p-4 bg-slate-700 transition-all ${
            activeSection === "background" ? "bg-slate-900" : ""
          }`}
        >
          Background
        </motion.button>
        <AnimatePresence>
          {activeSection === "background" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {backgroundImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-4 rounded-lg"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setImageToDelete(image.name);
                        setIsPopupOpen(true);
                      }}
                      className="absolute bg-black top-1 right-4 p-1 rounded-full"
                    >
                      <FaTimes />
                    </motion.button>
                    <div className="w-52 h-60 flex items-center justify-center border border-gray-300 rounded-md">
                      {deletingImage === image.name ? (
                        <AiOutlineLoading3Quarters className="text-4xl animate-spin text-gray-500" />
                      ) : (
                        <Image
                          src={image.url}
                          alt={image.url}
                          width={208}
                          height={240}
                          className="w-full h-full object-cover rounded-md"
                        />
                      )}
                    </div>
                  </motion.div>
                ))}

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
                            document
                              .getElementById(`file-input-${index}`)
                              ?.click()
                          }
                        >
                          <FaPlus className="text-4xl text-slate-500 mb-2" />
                          <p className="text-slate-500">
                            Clique para adicionar
                          </p>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border rounded-lg overflow-hidden mb-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ backgroundColor: "#1e293b" }}
          onClick={() => setActiveSection("carousel")}
          className={`w-full text-left p-4 bg-slate-700 transition-all ${
            activeSection === "carousel" ? "bg-slate-900" : ""
          }`}
        >
          Carrossel
        </motion.button>
        <AnimatePresence>
          {activeSection === "carousel" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-4 rounded-lg"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setImageToDelete(image.name);
                        setIsPopupOpen(true);
                      }}
                      className="absolute bg-black top-1 right-4 p-1 rounded-full"
                    >
                      <FaTimes />
                    </motion.button>
                    <div className="w-52 h-60 flex items-center justify-center border border-gray-300 rounded-md">
                      {deletingImage === image.name ? (
                        <AiOutlineLoading3Quarters className="text-4xl animate-spin text-gray-500" />
                      ) : (
                        <Image
                          src={image.url}
                          alt={image.url}
                          width={208}
                          height={240}
                          className="w-full h-full object-cover rounded-md"
                        />
                      )}
                    </div>
                  </motion.div>
                ))}

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
                            document
                              .getElementById(`file-input-${index}`)
                              ?.click()
                          }
                        >
                          <FaPlus className="text-4xl text-slate-500 mb-2" />
                          <p className="text-slate-500">
                            Clique para adicionar
                          </p>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-slate-800 p-6 rounded-lg shadow-lg w-96"
            >
              <h2 className="text-xl font-bold mb-4 text-center">
                Confirmar exclusão
              </h2>
              <p className="text-gray-400 text-center mb-4">
                Tem certeza que deseja excluir esta imagem?
              </p>
              <div className="flex justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPopupOpen(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Cancelar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleConfirmDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Excluir
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
