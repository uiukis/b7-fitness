import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative w-screen h-screen md:h-full">
      <div className="hidden md:block">
        <Image
          src="/images/background-about.png"
          alt="background"
          width={1920}
          height={1080}
          className="object-cover"
        />
      </div>
      <div className="block md:hidden absolute inset-0 w-full h-ful">
        <Image
          src="/images/background-about-mobile.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          className=""
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/30 " />
      </div>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-end text-center px-6 md:px-0"
      >
        <div className="flex flex-col items-start w-full md:w-1/2 md:mb-72 md:mr-24">
          <motion.h1
            className="uppercase text-orange-600 font-nexaBlack text-left text-4xl md:text-7xl"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            quem somos
          </motion.h1>
          <motion.p
            className="font-nexaRegular text-left mt-6 ml-2 text-white text-lg md:text-2xl leading-snug max-w-md md:max-w-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aqui, acreditamos que cada treino é um passo rumo à sua melhor
            versão. Nosso compromisso é com a sua evolução. Contamos com uma
            estrutura moderna, profissionais qualificados e um método que
            combina ciência e performance para garantir resultados reais.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
