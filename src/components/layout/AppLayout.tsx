import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { AppMainContainer } from "@/components/layout";
import { AppSplashScreen, AppHeader, AppFooter } from "@/components/common";

export function AppLayout() {
  const [loading, setLoading] = useState(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    return splashShown ? false : true;
  });

  useEffect(() => {
    if (loading) {
      sessionStorage.setItem("splashShown", "true");

      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return (
      <AppSplashScreen
        logoUrl="/assets/splash.png"
        text="Welcome to My Portfolio"
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <AppMainContainer>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </AppMainContainer>
  );
}
