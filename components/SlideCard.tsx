"use client";

import { useEffect, useState } from "react";
import SlideCardDesktop from "./SlideCardDesktop";
import SlideCardMobile from "./SlideCardMobile";
import { Modality } from "types/types";

interface SlideCardProps {
  data: Modality[];
}

export default function SlideCard({ data }: SlideCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(
    data.length - 1
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:flex-row relative z-20 w-full h-full md:w-auto overflow-x-auto md:overflow-visible md:px-0">
      {data.map((dt, index) =>
        isMobile ? (
          <SlideCardMobile
            key={index}
            data={dt}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            totalCards={data.length}
          />
        ) : (
          <SlideCardDesktop
            key={index}
            data={dt}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            totalCards={data.length}
          />
        )
      )}
    </div>
  );
}
