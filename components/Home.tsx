import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-screen h-screen md:h-full">
      <div className="hidden md:block">
        <Image
          src="/images/background-home.png"
          alt="background"
          width={1920}
          height={1080}
          objectFit="cover"
          priority
        />
      </div>
      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/images/background-home.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-start justify-center text-center px-6 md:px-0"
      >
        <div className="flex flex-col mt-48 xl:mt-52 2xl:mt-72 items-start">
          <motion.h1
            className="text-orange-600 uppercase font-nexaBlack italic text-3xl md:text-8xl sm:text-4xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            transforme-se
          </motion.h1>
          <div className="flex flex-row italic font-bold text-center uppercase">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="font-nexaLightItalic text-3xl md:text-8xl sm:text-4xl"
            >
              no seu
            </motion.h1>
            <motion.h1
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-3xl md:text-8xl sm:text-4xl ml-2"
            >
              melhor
            </motion.h1>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
