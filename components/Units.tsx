"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { units } from "utils/data";
import { useRouter } from "next/navigation";

export default function UnitsPage() {
  const router = useRouter();

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 3 },
    loop: true,
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
  });

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
          NOSSAS UNIDADES
        </h1>
        <div className="relative w-full max-w-6xl flex items-center justify-center mt-20 md:mt-40">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 md:left-[-50px] z-20 text-white text-4xl md:text-6xl"
          >
            <FaChevronLeft />
          </button>
          <div ref={sliderRef} className="keen-slider w-full px-4 md:px-0">
            {units.map((unit) => (
              <div
                key={unit.id}
                className="keen-slider__slide flex justify-center cursor-pointer"
                onClick={() => router.push(`/units/${unit.id}`)}
              >
                <div className="w-64 h-80 md:w-72 md:h-96 bg-black rounded-3xl overflow-hidden border-4 border-orange-500 shadow-lg relative">
                  <h2 className="absolute bottom-0 left-0 right-0 text-center text-white font-nexaBlack text-base md:text-lg p-2 z-10">
                    {unit.name}
                  </h2>
                  <Image
                    src={unit.imageInput}
                    alt={unit.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 opacity-30"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 md:right-[-50px] z-20 text-white text-4xl md:text-6xl"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
