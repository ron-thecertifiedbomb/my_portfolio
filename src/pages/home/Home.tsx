import {
  AppAboutMe,
  AppGallery,
  AppHero,
  AppMultimediaIconsSection,
  AppMyExperience,
  AppProjects,
  AppWebStackIconsSection,
} from "@/pages/home/section";

import { useScrollToTopWithHeader } from "@/hooks/useScrollToTopWithHeader";

export default function Home() {
  // Apply smooth scroll accounting for header
  useScrollToTopWithHeader();

  return (
    <>
      {/* <AppHero />
      <AppMyExperience /> */}
      <AppAboutMe />
      <AppWebStackIconsSection />
      <AppMultimediaIconsSection />
      <AppProjects />
      <AppGallery />
    </>
  );
}
