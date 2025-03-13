"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./Header";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-screen h-full">
      <Image
        src="/images/background-home.png"
        alt="background"
        width={1920}
        height={1080}
        priority
        className="object-cover"
        unoptimized
      />

      <Header isScrolled={isScrolled} />
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex absolute inset-0 items-baseline justify-center"
      >
        <div className="text-8xl 2xl:mt-72 xl:mt-56 ">
          <motion.h1
            className="italic text-orange-600 uppercase font-nexaRegular"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            transforme-se
          </motion.h1>
          <div className="flex italic justify-around font-bold text-center uppercase">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="font-nexaLightItalic"
            >
              no seu
            </motion.h1>
            <motion.h1
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              melhor
            </motion.h1>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
