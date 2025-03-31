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
    slides: { perView: 3, spacing: 15 },
    loop: true,
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
  });

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <div className="hidden md:block">
        <Image
          src="/images/background-units.png"
          alt="background"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/images/background-units.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-1 md:px-0">
        <h1 className="relative z-30 text-4xl md:text-6xl font-nexaBlack text-orange-500 text-center mb-16 md:mb-10">
          NOSSAS UNIDADES
        </h1>
        <div className="relative w-full md:w-1/2 flex items-center justify-center md:mt-40">
          <div ref={sliderRef} className="keen-slider">
            {units.map((unit) => (
              <div
                key={unit.id}
                className="keen-slider__slide flex items-center justify-center cursor-pointer"
                onClick={() => router.push(`/units/${unit.id}`)}
              >
                <div className="w-72 h-96 md:w-96 md:h-96 bg-black rounded-3xl border-4 border-orange-500 shadow-lg relative">
                  <h2 className="absolute bottom-0 left-0 right-0 text-center text-white font-nexaBlack text-2xl md:text-2xl mb-6 p-2 z-10">
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
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 md:left-[-100px] z-20 text-white text-4xl md:text-6xl"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 md:right-[-100px] z-20 text-white text-4xl md:text-6xl"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
