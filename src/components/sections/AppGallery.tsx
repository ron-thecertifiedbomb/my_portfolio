import { fadeIn } from "@/lib/motion";
import { AppCarousel } from "@/components/common";

import {
  AppSectionMotionTitleContainer,
  AppContentContainer,
} from "@/components/layout";

export function AppGallery() {
  
  const images = [
    { id: 1, src: "/assets/bg.jpg", alt: "Background 1" },
    { id: 2, src: "/assets/bg.jpg", alt: "Background 2" },
    { id: 3, src: "/assets/bg.jpg", alt: "Background 3" },
    { id: 4, src: "/assets/bg.jpg", alt: "Background 4" },
  ];

  return (
    <AppContentContainer withPadding={true}>
      <AppSectionMotionTitleContainer
        title="My Gallery"
        variants={fadeIn("up", "tween", 0.3, 1)}
      />
      <AppContentContainer>
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
    </AppContentContainer>
  );
}
