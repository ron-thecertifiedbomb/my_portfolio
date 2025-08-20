import { AppMotionContent } from "./app-motioncontent";
import { AppTransitioningText } from "./app-transitioningtext";
import { AppTint } from "./app-tint";
import { AppImageScreensaver } from "./app-imagescreensaver";

export default function AppHero() {
  const images = [
    { id: 1, src: "/assets/bg.jpg", alt: "Background 1" },
    { id: 2, src: "/assets/me.png", alt: "Background 2" },
    { id: 3, src: "/assets/bg.jpg", alt: "Background 3" },
    { id: 4, src: "/assets/bg.jpg", alt: "Background 4" },
  ];

  const phrases = [
    {
      id: 1,
      title: "Self-Taught & Battle-Tested.",
      description: "Crafting code and design from scratch with no shortcuts.",
    },
    {
      id: 2,
      title: "Multi-Skilled. Limitless Vision.",
      description:
        "From front-end polish to back-end power, versatility is the craft.",
    },
    {
      id: 3,
      title: "Creativity Engineered.",
      description:
        "Turning ideas into sleek, functional, and scalable solutions.",
    },
    {
      id: 4,
      title: "Innovation From Scratch.",
      description:
        "Building foundations, not templates every line of code matters.",
    },
  ];

  return (
    <AppMotionContent className="flex-1 space-y-6 mt-5">
      <AppImageScreensaver
        images={images}
        auto={false}
        interval={7000}
        transitionDuration={2}
        className="
    h-[300px]  
    sm:h-[400px] 
    md:h-[500px] 
    lg:h-[600px] 
    w-full 
    rounded-2xl
  "
      >
        <AppTint className="absolute inset-0 bg-black/70" />
        <AppTransitioningText
          items={phrases}
          interval={6000}
          transitionDuration={2}
        />
      </AppImageScreensaver>
    </AppMotionContent>
  );
}
