import { motion } from "framer-motion";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import { texts, routes } from "utils/data";

export default function Header({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: 0,
        height: isScrolled ? "80px" : "150px",
        opacity: isScrolled ? 0.95 : 1,
        backgroundColor: isScrolled
          ? "rgba(0, 0, 0, 0.9)"
          : "rgba(0, 0, 0, 0.5)",
        padding: isScrolled ? "8px 0" : "20px 0",
      }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full flex justify-center items-center z-50 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between w-2/3 h-full px-6"
      >
        <motion.div
          animate={{ scale: isScrolled ? 0.8 : 1 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 800 })}
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={220}
            height={0}
            priority
            unoptimized
          />
        </motion.div>
        <div className="flex gap-6">
          {texts.map((text, index) => (
            <motion.h1
              key={index}
              className="uppercase font-extrabold cursor-pointer text-white transition-all duration-300 text-xl md:text-2xl
                         hover:scale-105 hover:text-[#FF6A00] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{
                fontSize: isScrolled ? "1.4rem" : "1.8rem",
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link
                to={routes[text].replace("/", "")}
                className="text-2xl"
                smooth={true}
                duration={800}
                offset={text === "sobre" ? 200 : text === "planos" ? 200 : 0}
              >
                {text}
              </Link>
            </motion.h1>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
