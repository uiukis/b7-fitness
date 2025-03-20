"use client";

import { useState } from "react";
import Image from "next/image";
import { Modality } from "types/types";
import SlideCard from "./SlideCard";

interface UnitModalitiesProps {
  unit: {
    modalities: Modality[];
  };
}

export default function UnitModalities({ unit }: UnitModalitiesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    unit.modalities.length - 1
  );

  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="hidden md:block">
        <Image
          src="/images/background-units.png"
          alt="background"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          unoptimized
        />
      </div>

      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/images/background-units.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
          unoptimized
        />
      </div>
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4 md:px-0">
        <h1 className="relative z-30 text-4xl md:text-6xl font-nexaBlack text-orange-500 text-center mb-6 md:mb-10">
          MODALIDADES
        </h1>
        <div className="relative w-full max-w-7xl flex items-center justify-center mt-16 md:mt-32">
          <div className="flex relative z-20 w-full md:w-auto overflow-x-auto md:overflow-visible px-2 md:px-0">
            {unit.modalities.map((modality, index) => (
              <SlideCard
                key={index}
                data={modality}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                totalCards={unit.modalities.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
