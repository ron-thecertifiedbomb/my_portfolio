import {
  AppAboutMe,
  AppGallery,
  AppHero,
  AppMultimediaIconsSection,
  AppMyExperience,
  AppProjects,
  AppWebStackIconsSection,
} from "@/pages/home/section";

export default function Home() {
  return (
    <>
      <AppHero />

      <AppWebStackIconsSection />
      <AppMultimediaIconsSection />

      <AppAboutMe />
      <AppMyExperience />
      <AppProjects />
      <AppGallery />
    </>
  );
}
