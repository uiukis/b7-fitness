"use client";

import { FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageUploaderProps {
  index: number;
  file: File | null;
  uploading: boolean;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onSubmit: (e: React.FormEvent, index: number) => void;
  onRemove: (index: number) => void;
}

export function ImageUploader({
  index,
  file,
  uploading,
  onFileChange,
  onSubmit,
  onRemove,
}: ImageUploaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative p-4 rounded-lg"
    >
      <div className="w-52 h-60 flex items-center justify-center border border-gray-300 rounded-md">
        {uploading ? (
          <AiOutlineLoading3Quarters className="text-4xl animate-spin text-gray-500" />
        ) : file ? (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              onClick={(e) => onSubmit(e, index)}
              className="absolute flex bg-green-700 bottom-1 left-1 p-2 rounded-full items-center gap-1"
            >
              <FaCheck />
              <p className="font-bold">Enviar</p>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onRemove(index)}
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
                document.getElementById(`file-input-${index}`)?.click()
              }
            />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
            <input
              id={`file-input-${index}`}
              type="file"
              onChange={(e) => onFileChange(e, index)}
              className="hidden"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
