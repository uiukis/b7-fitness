import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { plans } from "utils/data";

export default function PlansPage() {
  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Image
        src="/images/background-units.png"
        alt="background"
        layout="fill"
        objectFit="cover"
        className="absolute"
        unoptimized
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#FF6A00] mt-16">
          PLANOS
        </h1>
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-[#222] text-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(255, 106, 0, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-[#FF6A00]">
                {plan.title}
              </h2>
              <ul className="mt-4 space-y-3 text-left w-full">
                {[
                  "Acesso a aulas coletivas",
                  "Professores qualificados",
                  "Cadeiras de massagem",
                  "Treine em todas as unidades",
                ].map((benefit, i) => (
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
              <p className="text-sm text-gray-400">Pagamento por recorrência</p>
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
  );
}
