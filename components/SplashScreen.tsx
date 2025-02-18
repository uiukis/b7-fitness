"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onLoaded: () => void;
}

export default function SplashScreen({ onLoaded }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoaded();
    }, 1600);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 1.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="mb-4"
        /> */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-12 h-12 border-t-4 border-orange-500 border-solid rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
