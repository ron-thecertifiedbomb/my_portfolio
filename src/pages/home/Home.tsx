import {
  AppAboutMe,
  AppGallery,
  AppHero,
  AppMyExperience,
  AppProjects,
} from "@/pages/home/section";
import { useScrollToHeroOnLoad } from "@/hooks/useScrollToTopWithHeader";
import { AppIconsSection } from "@/components/common/AppIconsSection";
import { multimediaStack,webTechStack } from "@/config/techstack";

export default function Home() {
  useScrollToHeroOnLoad();

  return (
    <>
      <AppHero />
      <AppAboutMe />
      <AppIconsSection
        containerClassName="overflow-hidden my-1 mx-auto w-[280px] sm:w-[360px] lg:w-[420px]"
        iconClassName="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
        stack={multimediaStack}
      />
      <AppIconsSection
        containerClassName="overflow-hidden w-full mx-auto "
        iconClassName="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
        stack={webTechStack}
      />
      <AppMyExperience />
      <AppProjects />
      <AppGallery />
    </>
  );
}
