"use client";

import SplashScreen from "components/SplashScreen";
import { useState } from "react";
import HomePage from "components/Home";
import AboutPage from "components/About";
import UnitsPage from "components/Units";
import OurAcademyPage from "components/OurAcademy";
import PlansPage from "components/Plans";
import Footer from "components/Footer";
import Header from "components/Header";
import SearchParamHandler from "components/SearchParamHandler"; // Novo componente

export default function Home() {
  const [isSplashLoaded, setIsSplashLoaded] = useState(false);

  const handleSplashLoaded = () => {
    setIsSplashLoaded(true);
  };

  if (!isSplashLoaded) {
    return <SplashScreen onLoaded={handleSplashLoaded} />;
  }

  return (
    <>
      <Header />
      <SearchParamHandler onLoaded={handleSplashLoaded} />
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
