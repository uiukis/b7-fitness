"use client";

import { motion } from "framer-motion";
import { useImages } from "hooks/useImages";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const { images: backgroundImages, loadImages: loadBackgroundImages } =
    useImages("background-images");

  useEffect(() => {
    if (!backgroundImages.length) {
      loadBackgroundImages();
    }
  }, [loadBackgroundImages, backgroundImages]);

  if (!backgroundImages.length) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Image
        src={backgroundImages[0]?.url || "/default-background.jpg"}
        alt="Background"
        fill
        className="object-cover"
        unoptimized
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75)_65%,theme(colors.orange.900))]"
      />

      <div className="p-10 absolute inset-0">
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex py-1.5 px-10 items-center justify-between w-full bg-white/10 backdrop-blur-sm rounded-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 items-center"
          >
            <h1 className="text-2xl font-bold text-white">Logo B7</h1>
            {["teste 1", "teste 2", "teste 3", "teste 4"].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-white"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-3xl text-sm px-5 py-2.5"
          >
            Default
          </motion.button>
        </motion.header>
      </div>
      <div className="flex h-screen w-screen absolute justify-evenly items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="content-center"
        >
          <motion.h1
            className="text-9xl font-extrabold text-orange-600 uppercase"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ative
          </motion.h1>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-7xl font-extrabold text-center text-white uppercase"
          >
            um novo
          </motion.h1>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-8xl font-extrabold text-center text-orange-600 uppercase"
          >
            estilo
          </motion.h1>
          <div className="flex justify-evenly items-end">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-7xl font-extrabold text-center text-white uppercase mb-0.5"
            >
              de
            </motion.h1>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-8xl font-extrabold text-center text-orange-600 uppercase"
            >
              vida
            </motion.h1>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex mt-5 text-6xl font-thin text-center text-white uppercase"
          >
            <h1 className="text-white">#vempra</h1>
            <motion.h1
              className="text-orange-600 font-bold"
              animate={{ x: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              b7
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="h-full"
        >
          <Image
            height={0}
            width={0}
            src={backgroundImages[1]?.url || "/default-background.jpg"}
            alt=""
            className="h-full w-full"
            unoptimized
          />
        </motion.div>
      </div>
    </>
  );
}
