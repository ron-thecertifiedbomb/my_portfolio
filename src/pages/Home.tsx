
import { AppGallery } from "@/components/sections/AppGallery";
import {
  AppHero,
  AppAboutMe,
  AppMarqueeSection,
  AppProjects,
  AppMyExperience,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <AppHero />
      <AppMarqueeSection />
      <AppAboutMe />
      <AppMyExperience />
      <AppProjects />
      <AppGallery />
    </>
  );
}
