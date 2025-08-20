import { useState, useEffect } from "react";
import { AppGallery } from "@/components/sections/AppGallery";
import {
  AppHero,
  AppAboutMe,
  AppMarqueeSection,
  AppProjects,
  AppMyExperience,
} from "@/components/sections";
import { AppSplashScreen } from "@/components/common/AppSplashScreen";

export default function Home() {

  const [loading, setLoading] = useState(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    return splashShown ? false : true;
  });

  useEffect(() => {
    if (loading) {
      sessionStorage.setItem("splashShown", "true");
      const timer = setTimeout(() => setLoading(false), 3000); // hide after 3s
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Show splash if loading is true
  if (loading) {
    return (
      <AppSplashScreen
        logoUrl="/assets/splash.png"
        text="Welcome to My Portfolio"
      />
    );
  }

  // Main content
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
