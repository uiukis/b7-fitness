"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { animateScroll as scroll } from "react-scroll";
import { texts, routes } from "utils/data";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (route: string) => {
    setIsMenuOpen(false);
    if (pathname === "/") {
      const scrollTarget =
        route === "/"
          ? 0
          : document.getElementById(route.replace("/", ""))?.offsetTop || 0;
      scroll.scrollTo(scrollTarget, {
        smooth: true,
        duration: 800,
        offset: route === "/sobre" ? 200 : 0,
      });
    } else {
      router.push(`/?scrollTo=${route.replace("/", "")}`);
    }
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: 0,
        height: isMenuOpen ? "300px" : isScrolled ? "80px" : "150px",
        opacity: isScrolled ? 0.95 : 1,
        backgroundColor: isScrolled
          ? "rgba(0, 0, 0, 0.9)"
          : "rgba(0, 0, 0, 0.5)",
        padding: isScrolled ? "8px 0" : "50px 0",
      }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-screen flex flex-col items-center md:justify-center z-50 backdrop-blur-md overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between w-full max-w-7xl px-6"
      >
        <motion.div
          animate={{ scale: isScrolled ? 0.8 : 1 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => {
            if (pathname === "/") {
              scroll.scrollToTop({ smooth: true, duration: 800 });
            } else {
              router.push("/");
            }
          }}
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={50}
            priority
            unoptimized
          />
        </motion.div>

        <div className="md:hidden pr-4">
          <motion.div
            className="cursor-pointer"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-white text-3xl" />
            ) : (
              <FaBars className="text-white text-3xl" />
            )}
          </motion.div>
        </div>
        <div className="hidden md:flex gap-6">
          {texts.map((text, index) => {
            const route = routes[text];

            return (
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
                onClick={() => handleNavigation(route)}
              >
                {text}
              </motion.h1>
            );
          })}
        </div>
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center mt-6 md:hidden"
          >
            {texts.map((text, index) => {
              const route = routes[text];

              return (
                <motion.h1
                  key={index}
                  className="uppercase font-extrabold cursor-pointer text-white transition-all duration-300 text-xl my-2
                             hover:scale-105 hover:text-[#FF6A00] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => handleNavigation(route)}
                >
                  {text}
                </motion.h1>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
