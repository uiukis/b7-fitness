"use client";

import Image from "next/image";
import { Modality } from "types/types";
import SlideCard from "./SlideCard";

interface UnitModalitiesProps {
  unit: {
    modalities: Modality[];
  };
}

export default function UnitModalities({ unit }: UnitModalitiesProps) {
  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center  ">
      <div className="hidden md:block">
        <Image
          src="/images/background-units.jpg"
          alt="background"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/images/background-units.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4 md:px-0">
        <h1 className="relative z-30 text-4xl md:text-6xl font-nexaBlack text-orange-500 text-center mb-6 md:mb-10">
          MODALIDADES
        </h1>
        <div className="relative w-full max-w-7xl flex items-center justify-center md:mt-32">
          <SlideCard data={unit.modalities || []} />
        </div>
      </div>
    </div>
  );
}
