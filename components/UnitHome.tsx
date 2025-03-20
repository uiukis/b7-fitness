"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Unit } from "types/types";

interface UnitHomeProps {
  unit: Unit;
}

export default function UnitHome({ unit }: UnitHomeProps) {
  return (
    <div className="relative w-screen h-screen md:h-full overflow-hidden">
      <div className="hidden md:block">
        <Image
          src={unit.image}
          alt="background"
          width={1920}
          height={1080}
          priority
          objectFit="cover"
          className="opacity-50"
          unoptimized
        />
      </div>
      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src={unit.image}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
          unoptimized
        />
      </div>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0"
      >
        <div className="flex flex-col justify-center items-center md:items-start md:mt-56 md:ml-96 w-full h-full">
          <motion.h1
            className="italic text-white uppercase font-nexaRegular text-5xl md:text-8xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            unidade
          </motion.h1>
          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-bold text-orange-600 uppercase text-5xl md:text-8xl"
          >
            {unit.name}
          </motion.h1>
        </div>
      </motion.section>
    </div>
  );
}
