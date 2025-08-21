import { fadeIn } from "@/lib/motion";
import { AppCarousel, AppLabel } from "@/components/common";
import { AppContentContainer } from "@/components/layout";

export function AppGallery() {
  const images = [
    { id: 1, src: "/assets/bg.jpg", alt: "Background 1" },
    { id: 2, src: "/assets/bg.jpg", alt: "Background 2" },
    { id: 3, src: "/assets/bg.jpg", alt: "Background 3" },
    { id: 4, src: "/assets/bg.jpg", alt: "Background 4" },
  ];

  return (
    <AppContentContainer>
      <AppLabel
        variant="h2"
        initial="hidden"
        animate="show"
        variants={fadeIn("up", "tween", 0.3, 1)}
      >
        My Gallery
      </AppLabel>
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
