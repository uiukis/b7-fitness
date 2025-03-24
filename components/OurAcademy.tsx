"use client";

import Image from "next/image";
import { benefits } from "utils/data";
import SlideCard from "./SlideCard";

export default function OurAcademyPage() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <div className="hidden md:block">
        <Image
          src="/images/background-our-academy.png"
          alt="background"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/images/background-our-academy.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-1 md:px-0">
        <h1 className="relative z-30 text-4xl md:text-6xl font-nexaBlack text-orange-500 text-center">
          NOSSA ACADEMIA
        </h1>
        <div className="relative w-full max-w-7xl flex items-center justify-center h-3/4">
          <SlideCard data={benefits} />
        </div>
      </div>
    </div>
  );
}
