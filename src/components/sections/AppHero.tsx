import { useEffect, useState } from "react";
import { AppTransitioningText, AppTint } from "@/components/common";
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
    fetchHeroImages().then((data) => setImages(data));
    fetchHeroQuotes().then((data) => setPhrases(data));
  }, []);

  return (
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
         mt-20
         mb-10
        "
    >
      <AppTint className="absolute inset-0 bg-black/70 rounded-xl" />
      <AppTransitioningText
        items={phrases}
        interval={6000}
        transitionDuration={2}
      />
    </AppImageScreensaver>
  );
}
