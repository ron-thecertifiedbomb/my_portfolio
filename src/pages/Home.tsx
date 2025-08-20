import AboutMe from "@/components/app-aboutme";
import { AppGallery } from "@/components/app-gallery";
import AppHero from "@/components/app-hero";
import AppMarqueeSection from "@/components/app-marqueesection";

import { MyExperience } from "@/components/app-myexperience";
import { AppProjects } from "@/components/app-project";

export default function Home() {
    return (
      <>
        <AppHero />
     <AppMarqueeSection />
        <AboutMe />
        <MyExperience />
        <AppProjects />
        <AppGallery />
      </>
    );
}
