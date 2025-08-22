import {
  AppAboutMe,
  AppGallery,
  AppHero,
  AppMarqueeSection,
  AppMyExperience,
  AppProjects,
} from "@/pages/home/section";

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
