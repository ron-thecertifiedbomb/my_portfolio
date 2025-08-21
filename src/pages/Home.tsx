
import {
  AppHero,
  AppAboutMe,
  AppMarqueeSection,
  AppProjects,
  AppMyExperience,
  AppGallery,
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
