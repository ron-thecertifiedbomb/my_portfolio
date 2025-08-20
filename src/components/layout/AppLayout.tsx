import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { AppHeader } from "../common/AppHeader";
import { AppFooter } from "../common/AppFooter";
import { AppMainContainer } from "./AppMainContainer";
import { AppSectionContainer } from "./AppSectionContainer";
import { AppSplashScreen } from "../common/AppSplashScreen";

export function AppLayout() {
  const [loading, setLoading] = useState(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    return splashShown ? false : true;
  });

  useEffect(() => {
    if (loading) {
      sessionStorage.setItem("splashShown", "true");

      const timer = setTimeout(() => {
        setLoading(false); // **unmount splash**
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return (
      <AppSplashScreen
        logoUrl="/assets/splash.png"
        text="Welcome to My Portfolio"
        onFinish={() => setLoading(false)} // fallback if you want animation-based finish
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
