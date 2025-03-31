"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Unit } from "types/types";

interface LocationProps {
  unit: Unit;
}

const DynamicMap = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

export default function LocationPage({ unit }: LocationProps) {
  return (
    <div
      className="relative w-screen h-screen
     flex flex-col items-center justify-center px-4 md:px-0 "
    >
      <h1 className="relative mt-10 md:mt-32 uppercase z-30 text-4xl md:text-6xl font-nexaBlack text-orange-500 text-center">
        localização
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-3/4 h-full max-w-6xl md:mt-20">
        <DynamicMap position={[unit.position[0], unit.position[1]]} />

        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
          <h2 className="text-2xl md:text-4xl font-nexaRegular w-96">
            Horário de funcionamento
          </h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li className="text-xl flex md:flex-col items-center md:items-start gap-2 md:gap-0 font-nexaRegular">
              <span className="flex text-2xl md:text-4xl text-[#FF6A00] font-bold">
                Seg a Sex <p className="md:hidden">:</p>
              </span>
              {unit.hours.week}
            </li>
            <li className="text-xl flex md:flex-col items-center md:items-start gap-2 md:gap-0 font-nexaRegular">
              <span className="flex text-2xl md:text-4xl text-[#FF6A00] font-bold">
                Sábado <p className="md:hidden">:</p>
              </span>
              {unit.hours.saturday}
            </li>
            <li className="text-xl flex md:flex-col items-center md:items-start gap-2 md:gap-0 font-nexaRegular">
              <span className="flex text-2xl md:text-4xl text-[#FF6A00] font-bold">
                Domingo <p className="md:hidden">:</p>
              </span>
              {unit.hours.sunday}
            </li>
          </ul>
          <div className="mt-6 flex items-center w-96 md:w-full gap-2 text-lg">
            <FaMapMarkerAlt className="text-[#FF6A00] text-2xl" />
            <p className="text-gray-300">{unit.address}</p>
          </div>

          <motion.button
            className="mt-6 bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-bold text-lg"
            whileHover={{ scale: 1.1, backgroundColor: "#FF8500" }}
            transition={{ duration: 0.2 }}
          >
            QUERO TREINAR
          </motion.button>
        </div>
      </div>
    </div>
  );
}
