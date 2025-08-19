import AboutMe from "@/components/app-aboutme";
import { AppGallery } from "@/components/app-gallery";
import AppHero from "@/components/app-hero";
import { MyExperience } from "@/components/app-myexperience";
import { AppProjects } from "@/components/app-project";

export default function Home() {
    return (
      <>
        <AppHero />
        <AboutMe />
        <MyExperience />
        <AppProjects />
        <AppGallery />
      </>
    );
}
