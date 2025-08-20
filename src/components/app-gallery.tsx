import { fadeIn } from "@/lib/motion";
import { AppCarousel } from "./app-carousel";
import { AppContentContainer } from "./app-contentcontainer";
import { AppSectionMotionTitle } from "./app-sectionmotiontitle";

export function AppGallery() {
    const images = [
        { id: 1, src: "/assets/bg.jpg", alt: "Background 1" },
        { id: 2, src: "/assets/bg.jpg", alt: "Background 2" },
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
        <AppCarousel
          items={images}
          renderItem={(img) => (
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover rounded-xl"
            />
          )}
          maxWidth="max-w-5xl"
        />
      </AppContentContainer>
    );
}
