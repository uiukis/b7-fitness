"use client";

import SplashScreen from "components/SplashScreen";
import { useState } from "react";
import HomePage from "components/Home";
import AboutPage from "components/About";
import UnitsPage from "components/Units";
import OurAcademyPage from "components/OurAcademy";
import PlansPage from "components/Plans";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";
import Footer from "components/Footer";
import Header from "components/Header";

export default function Home() {
  const [isSplashLoaded, setIsSplashLoaded] = useState(false);
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  const handleSplashLoaded = () => {
    setIsSplashLoaded(true);

    if (scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          smooth: true,
          duration: 800,
          offset: scrollTo === "sobre" ? 200 : 0,
        });
      }, 500);
    }
  };

  if (!isSplashLoaded) {
    return <SplashScreen onLoaded={handleSplashLoaded} />;
  }

  return (
    <>
      <Header />
      <section id="home">
        <HomePage />
      </section>
      <section id="sobre">
        <AboutPage />
      </section>
      <section id="unidades">
        <UnitsPage />
      </section>
      <section id="modalidades">
        <OurAcademyPage />
      </section>
      <section id="planos">
        <PlansPage />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
