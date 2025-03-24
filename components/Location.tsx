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
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center   px-4 md:px-0">
      <div className="absolute inset-0 w-full h-full flex flex-col items-center">
        <h1 className="relative mt-10 md:mt-32 uppercase z-30 text-4xl md:text-6xl font-nexaBlack text-orange-500 text-center">
          localização
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl md:mt-20">
          <div className="relative w-80 h-2/4 md:h-4/5 border-4 border-[#FF6A00] rounded-3xl  ">
            <DynamicMap position={[unit.position[0], unit.position[1]]} />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-[#FF6A00]">
              Horário de funcionamento
            </h2>
            <ul className="mt-4 space-y-2 text-lg">
              <li>
                <span className="text-[#FF6A00] font-bold">Seg a Sex:</span>{" "}
                {unit.hours.week}
              </li>
              <li>
                <span className="text-[#FF6A00] font-bold">Sábado:</span>{" "}
                {unit.hours.saturday}
              </li>
              <li>
                <span className="text-[#FF6A00] font-bold">Domingo:</span>{" "}
                {unit.hours.sunday}
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-lg">
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
    </div>
  );
}
