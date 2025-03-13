"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { benefits } from "utils/data";

export default function OurAcademyPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    benefits.length - 1
  );

  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Image
        src="/images/background-units.png"
        alt="background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        unoptimized
      />
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="relative z-30 text-6xl font-nexaBlack text-orange-500 text-center mb-10">
          NOSSA ACADEMIA
        </h1>
        <div className="relative w-full max-w-6xl flex items-center justify-center mt-40">
          <div className="flex relative z-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ width: 80, backgroundColor: "#FF5A00" }}
                animate={{
                  width: activeIndex === index ? 400 : 90,
                  backgroundColor:
                    activeIndex === index ? "#000000" : "#FF5A00",
                  boxShadow:
                    activeIndex === index
                      ? "0px 10px 20px rgba(0, 0, 0, 0.6)"
                      : "0px 5px 15px rgba(0, 0, 0, 0.9)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`relative h-96 flex flex-col items-center justify-center cursor-pointer p-4 overflow-hidden rounded-l-lg ${
                  index === benefits.length - 1 ? "rounded-r-lg" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(benefits.length - 1)}
                style={{
                  zIndex: activeIndex === index ? 10 : index,
                  marginLeft: index !== 0 ? -10 : 0,
                }}
              >
                <span
                  className="text-black font-nexaBlack text-xl transform rotate-180 whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {benefit.title}
                </span>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/90 rounded-l-lg"
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={200}
                      height={120}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <p className="text-white text-center text-sm">
                      {benefit.text}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
