"use client";

import SplashScreen from "components/SplashScreen";
import { useState } from "react";
import HomePage from "components/Home";
import AboutPage from "components/About";
import UnitsPage from "components/Units";
import OurAcademyPage from "components/OurAcademy";
import PlansPage from "components/Plans";

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
    </>
  );
}
