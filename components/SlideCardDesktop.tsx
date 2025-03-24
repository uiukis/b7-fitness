"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SlideCardDesktopProps {
  data: {
    title: string;
    image: string;
    text: string;
  };
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  totalCards: number;
}

export default function SlideCardDesktop({
  data,
  index,
  activeIndex,
  setActiveIndex,
  totalCards,
}: SlideCardDesktopProps) {
  return (
    <motion.div
      key={index}
      initial={{ width: 80, backgroundColor: "#FF5A00" }}
      animate={{
        width: activeIndex === index ? 500 : 100,
        height: 400,
        backgroundColor: activeIndex === index ? "#000000" : "#FF5A00",
        boxShadow:
          activeIndex === index
            ? "0px 10px 20px rgba(0, 0, 0, 0.6)"
            : "0px 5px 15px rgba(0, 0, 0, 0.9)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative flex flex-col items-center justify-center cursor-pointer p-4   rounded-lg"
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(totalCards - 1)}
      style={{
        zIndex: activeIndex === index ? 10 : index,
        marginLeft: index !== 0 ? -10 : 0,
      }}
    >
      <span
        className="text-black font-nexaBlack text-xl uppercase transform rotate-180 whitespace-nowrap"
        style={{ writingMode: "vertical-rl" }}
      >
        {data.title}
      </span>
      {activeIndex === index && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col justify-between items-center text-white"
        >
          <p className="relative z-10 text-white uppercase px-4 mt-10 font-nexaBlack text-2xl">
            {data.title}
          </p>
          <Image
            src={data.image}
            alt={data.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-25"
          />
          <p className="relative z-10 text-lg px-4 mb-4 font-nexaRegular">
            {data.text}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
