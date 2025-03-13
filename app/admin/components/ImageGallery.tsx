"use client";

import { FaTimes } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImageStorage } from "types/types";

interface ImageGalleryProps {
  images: ImageStorage[];
  deletingImage: string | null;
  onDelete: (imageName: string) => void;
}

export function ImageGallery({
  images,
  deletingImage,
  onDelete,
}: ImageGalleryProps) {
  return images.map((image, index) => (
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
        onClick={() => onDelete(image.name)}
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
  ));
}
