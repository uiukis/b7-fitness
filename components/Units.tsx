"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { units } from "utils/data";

export default function UnitsPage() {
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
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center">
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
          NOSSAS UNIDADES
        </h1>
        <div className="relative w-full max-w-6xl px-6 flex items-center justify-center mt-40">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-[-50px] z-20 text-white text-6xl"
          >
            <FaChevronLeft />
          </button>

          <div ref={sliderRef} className="keen-slider w-full">
            {units.map((unit, index) => (
              <div
                key={index}
                className="keen-slider__slide flex justify-center"
              >
                <div className="relative w-72 h-96 bg-black/70 rounded-3xl overflow-hidden border-4 border-orange-500 shadow-lg">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    width={400}
                    height={300}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 py-4 text-center">
                    <h2 className="text-white font-nexaBlack text-lg">
                      {unit.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-[-50px] z-20 text-white text-6xl"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
