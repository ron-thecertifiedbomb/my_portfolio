import {
  AppAboutMe,
  AppGallery,
  AppHero,
  AppMultimediaIconsSection,
  AppMyExperience,
  AppProjects,
  AppWebStackIconsSection,
} from "@/pages/home/section";

import { useScrollToHeroOnLoad } from "@/hooks/useScrollToTopWithHeader";

export default function Home() {
  // Apply smooth scroll accounting for header
  useScrollToHeroOnLoad();

  return (
    <>
      <AppHero />

      <AppAboutMe />
      <AppWebStackIconsSection />
      <AppMultimediaIconsSection />
      <AppProjects />
      <AppGallery />
    </>
  );
}
