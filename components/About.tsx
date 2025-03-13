import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative w-screen h-full">
      <Image
        src="/images/background-about.png"
        alt="background"
        width={1920}
        height={1080}
        className="object-cover"
        unoptimized
      />
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex absolute inset-0 items-baseline justify-center"
      >
        <div className="2xl:mt-80 xl:mt-56 2xl:ml-96 w-2/6 flex flex-col items-center justify-center">
          <motion.h1
            className="uppercase text-6xl font-nexaBlack text-orange-600"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            quem somos
          </motion.h1>
          <motion.h1
            className="uppercase font-nexaRegular mt-10 mr-10 text-white text-2xl w-96"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            LOREM I PSUM DOLOR SI T AMET, CONSECTETUR ADI PI SCI NG ELI T, SED
            DO EI USMOD TEMPOR I NCI DI DUNT UT LABORE ET DOLORE MAGNA ALI QUA.
            QUI S I PSUM SUSPENDI SSE UL TRI CES GRAVI DA. RI SUS COMMODO VI
            VERRA MAECENAS AC
          </motion.h1>
        </div>
      </motion.section>
    </div>
  );
}
