"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaTimesCircle,
} from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { plans } from "utils/data";

export default function PlansPage() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 3, spacing: 15 },
    loop: false,
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
        loop: true,
      },
    },
  });

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center  ">
      <div className="hidden md:block">
        <Image
          src="/images/background-plans.jpg"
          alt="background"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/images/background-plans.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4 md:px-0">
        <h1 className="relative z-30 text-4xl md:text-6xl font-nexaBlack text-orange-500 text-center mb-6 md:mb-10">
          PLANOS
        </h1>
        <div className="relative w-full md:w-1/2 flex items-center justify-center md:mt-20">
          <div ref={sliderRef} className="keen-slider">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="keen-slider__slide flex justify-center items-center"
              >
                <div className="w-80 md:w-[620px] min-h-[500px] font-nexaBlack text-center bg-[#222] p-8 gap-2 rounded-lg shadow-lg flex flex-col justify-between">
                  <h2 className="text-5xl font-bold text-[#FF6A00]">
                    {plan.title}
                  </h2>
                  <ul className="md:mt-4 font-nexaBlack space-y-3 text-left w-full">
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
                  <p className="md:mt-4 text-lg font-bold text-gray-300">
                    A PARTIR DE
                  </p>
                  <div className="flex items-stretch justify-center gap-1">
                    <div className="relative flex flex-col items-start text-xl font-nexaBlack text-white leading-none">
                      <p className="text-xl">R$</p>
                      {plan.title === "FAMÍLIA" ? (
                        <p className="absolute top-6 text-base font-nexaRegular text-white">
                          12x
                        </p>
                      ) : null}
                    </div>
                    <p className="text-5xl font-nexaBlack text-white">
                      {plan.price}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 font-nexaBlack">
                    {plan.title === "FAMÍLIA"
                      ? "Pagamento no crédito por pessoa"
                      : "Pagamento por recorrência"}
                  </p>
                  <p className="text-sm text-gray-400 font-nexaBlack lg:whitespace-nowrap">
                    R$ {plan.fullPrice}
                    {plan.title === "FAMÍLIA"
                      ? " anual no pix ou débito"
                      : " sem recorrência"}
                  </p>
                  <motion.button
                    className="md:mt-6 bg-[#FF6A00] text-white font-nexaBlack px-6 py-2 rounded-lg font-bold"
                    whileHover={{ scale: 1.1, backgroundColor: "#FF8500" }}
                    transition={{ duration: 0.2 }}
                  >
                    MATRICULE-SE
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute md:hidden left-1 md:left-[-50px] z-20 text-white text-2xl md:text-6xl"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute md:hidden right-1 md:right-[-50px] z-20 text-white text-2xl md:text-6xl"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
