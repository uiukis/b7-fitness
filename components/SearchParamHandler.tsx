"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";

interface SearchParamHandlerProps {
  onLoaded: () => void;
}

export default function SearchParamHandler({
  onLoaded,
}: SearchParamHandlerProps) {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    onLoaded();

    if (scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          smooth: true,
          duration: 800,
          offset: scrollTo === "sobre" ? 200 : 0,
        });
      }, 500);
    }
  }, [scrollTo, onLoaded]);

  return null;
}
