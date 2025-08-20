"use client";

import { useEffect, useState } from "react";
import { AppMotionContent } from "../layout/AppMotionContent";
import { AppTransitioningText } from "../common/AppTransitionintText";
import { AppTint } from "../common/AppTint";
import { AppImageScreensaver } from "../common/AppImageScreenSaver";
import { fetchHeroImages, fetchHeroQuotes } from "@/hooks/fetchHeroData";

interface HeroQuote {
  id: number;
  title: string;
  description: string;
}

interface ScreensaverImage {
  src: string;
  alt?: string;
}

export function AppHero() {
  const [images, setImages] = useState<ScreensaverImage[]>([]);
  const [phrases, setPhrases] = useState<HeroQuote[]>([]);

  useEffect(() => {
    // Fetch hero images
    fetchHeroImages().then((data) => setImages(data));

    // Fetch hero quotes
    fetchHeroQuotes().then((data) => setPhrases(data));
  }, []);

  return (
    <AppMotionContent className="flex-1 space-y-6 mt-20 rounded-xl">
      <AppImageScreensaver
        images={images}
        auto={true}
        interval={7000}
        transitionDuration={2}
        className="
          h-[300px]  
          sm:h-[400px] 
          md:h-[500px] 
          lg:h-[600px] 
          w-full 
         rounded-xl
        "
      >
        <AppTint className="absolute inset-0 bg-black/70 rounded-xl" />
        <AppTransitioningText
          items={phrases}
          interval={6000}
          transitionDuration={2}
        />
      </AppImageScreensaver>
    </AppMotionContent>
  );
}
