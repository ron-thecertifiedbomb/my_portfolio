import { fadeIn } from "@/lib/motion";
import { AppContentContainer } from "./app-contentcontainer";
import { AppSectionMotionTitle } from "./app-sectionmotiontitle";
import { AppImageScreensaver } from "./app-imagescreensaver";
import { AppLabel } from "./app-label";

export function AppGallery() {
 
   const images = [
     { id: 1, src: "/assets/bg.jpg", alt: "Background 1" },
     { id: 2, src: "/assets/me.png", alt: "Background 2" },
     { id: 3, src: "/assets/bg.jpg", alt: "Background 3" },
     { id: 4, src: "/assets/bg.jpg", alt: "Background 4" },
   ];
    return (
      <AppContentContainer className="mt-8">
        <AppSectionMotionTitle
          title="My Gallery"
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="mb-6"
        />
        <AppImageScreensaver
          images={images}
          interval={7000}
          transitionDuration={2}
          className="h-[600px] w-full rounded-2xl"
        >
       <AppContentContainer className="bg-white/40 dark:bg-background/30 hover:shadow-lg transition-shadow duration-300 border-0 p-4 rounded-2xl mb-3">
              <AppLabel variant="h3" className="mb-4">
                Hey, I’m Ronan Sibunga.
              </AppLabel>
              <AppLabel variant="p">
                Full Stack Developer & Creative Explorer. I craft sleek,
                responsive apps with React, React Native, and Next.js—and when I’m
                not coding, I’m jamming on guitar, animating, editing videos, or
                designing visuals. Tech meets creativity, and magic happens.
              </AppLabel>
            </AppContentContainer>
        </AppImageScreensaver>
        {/* <AppCarousel
          items={images}
          renderItem={(img) => (
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover rounded-xl"
            />
          )}
          maxWidth="max-w-5xl"
        /> */}
      </AppContentContainer>
    );
}
