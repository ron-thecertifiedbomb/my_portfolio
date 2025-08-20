import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { AppHeader } from "../common/AppHeader";
import { AppFooter } from "../common/AppFooter";
import { AppMainContainer } from "./AppMainContainer";
import { AppSectionContainer } from "./AppSectionContainer";
import { AppSplashScreen } from "../common/AppSplashScreen";

export function AppLayout() {
  const [loading, setLoading] = useState(() => {
    // Check if splash screen was shown this session
    return !sessionStorage.getItem("splashShown");
  });

  useEffect(() => {
    if (loading) {
      sessionStorage.setItem("splashShown", "true");
      const timer = setTimeout(() => setLoading(false), 5000); // 5s splash
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return (
      <AppSplashScreen
        logoUrl="/assets/splash.png"
        text="Welcome to My Portfolio"
      />
    );
  }

  return (
    <AppMainContainer>
      <AppSectionContainer component={<AppHeader />} />
      <AppSectionContainer component={<Outlet />} />
      <AppSectionContainer component={<AppFooter />} />
    </AppMainContainer>
  );
}
