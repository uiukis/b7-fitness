"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagram, FaTiktok, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const socialLinks = [
  { icon: FaInstagram, link: "#" },
  { icon: FaTiktok, link: "#" },
  { icon: FaXTwitter, link: "#" },
  { icon: FaLinkedin, link: "#" },
];

const footerLinks = [
  {
    title: "Conheça",
    links: [
      { name: "Quem somos", route: "sobre" },
      { name: "Unidades", route: "unidades" },
      { name: "Nossa academia", route: "modalidades" },
    ],
  },
  {
    title: "Planos",
    links: [
      { name: "Flex", route: "planos" },
      { name: "Plus", route: "planos" },
      { name: "Família", route: "planos" },
    ],
  },
  {
    title: "Saiba mais",
    links: [
      { name: "Contato", route: "contato" },
      { name: "Trabalhe conosco", route: "trabalhe-conosco" },
      { name: "Eventos", route: "eventos" },
    ],
  },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (route: string) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const scrollTarget = document.getElementById(route)?.offsetTop || 0;
      scroll.scrollTo(scrollTarget, {
        smooth: true,
        duration: 800,
        offset: route === "sobre" ? 200 : 0,
      });
    } else {
      router.push(`/?scrollTo=${route}`);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-10 relative z-50"
    >
      <div className="container mx-auto px-6 lg:px-48">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between border-b border-gray-500 pb-6">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => {
              event.stopPropagation();
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
              width={220}
              height={0}
              priority
            />
          </motion.div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <social.icon className="text-orange-500 text-2xl cursor-pointer hover:opacity-80" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-center md:text-left">
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-nexaBlack">{section.title}</h3>
              <ul className="mt-2 space-y-1">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="font-nexaRegular transition-all duration-300
                          hover:text-[#FF6A00] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  >
                    <a
                      onClick={() => handleNavigation(link.route)}
                      className="cursor-pointer transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
