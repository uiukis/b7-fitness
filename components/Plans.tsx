"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { plans } from "utils/data";

export default function PlansPage() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
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
        <h1 className="text-4xl md:text-7xl font-extrabold text-[#FF6A00] mt-20 md:mt-32">
          PLANOS
        </h1>
        <div className="mt-10 md:mt-24 w-full max-w-6xl">
          <div ref={sliderRef} className="keen-slider">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="keen-slider__slide bg-[#222] text-white p-6 rounded-lg shadow-lg w-80 md:w-96 flex flex-col items-center"
              >
                <h2 className="text-2xl font-bold text-[#FF6A00]">
                  {plan.title}
                </h2>
                <ul className="mt-4 space-y-3 text-left w-full">
                  {plan.description.map((benefit, i) => (
                    <li key={i}>
                      {plan.benefits[i] ? (
                        <FaCheckCircle className="inline text-[#FF6A00] mr-2" />
                      ) : (
                        <FaTimesCircle className="inline text-gray-500 mr-2" />
                      )}
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-lg font-bold text-gray-300">
                  A PARTIR DE
                </p>
                <p className="text-4xl font-extrabold text-white">
                  R$ {plan.price}
                </p>
                <p className="text-sm text-gray-400">
                  Pagamento por recorrência
                </p>
                <p className="text-sm text-gray-400">
                  R$ {plan.fullPrice} sem recorrência
                </p>
                <motion.button
                  className="mt-6 bg-[#FF6A00] text-white px-6 py-2 rounded-lg font-bold"
                  whileHover={{ scale: 1.1, backgroundColor: "#FF8500" }}
                  transition={{ duration: 0.2 }}
                >
                  MATRICULE-SE
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
