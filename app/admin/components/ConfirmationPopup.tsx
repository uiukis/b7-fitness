"use client";

import { motion } from "framer-motion";

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ConfirmationPopup({
  isOpen,
  onClose,
  onConfirm,
}: ConfirmationPopupProps) {
  if (!isOpen) return null;

  return (
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
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
          >
            Cancelar
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Excluir
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
