import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import {
  AppFooter,
  AppHeader,
  AppLoadingBar,
  AppSplashScreen,
} from "@/components/common";
import { LizardInteractiveNavigationControlSection, LizardMainContainer } from "@/components/common/LizardComponents";

export function AppLayout() {
  const location = useLocation();

  // First-time splash screen
  const [firstLoad, setFirstLoad] = useState(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    return splashShown ? false : true;
  });

  // Route-change loading screen
  const [routeLoading, setRouteLoading] = useState(false);

  // Handle first-time splash
  useEffect(() => {
    if (firstLoad) {
      sessionStorage.setItem("splashShown", "true");

      const timer = setTimeout(() => setFirstLoad(false), 10000); // 10s splash
      return () => clearTimeout(timer);
    }
  }, [firstLoad]);

  // Handle route-change loading (after first splash)
  useEffect(() => {
    if (!firstLoad) {
      setRouteLoading(true);
      const timer = setTimeout(() => setRouteLoading(false), 2000); // 2s loading
      return () => clearTimeout(timer);
    }
  }, [location.pathname, firstLoad]);

  // Show first-time splash
  if (firstLoad) {
    return (
      <AppSplashScreen
        logoUrl="/assets/splash.png"
        onFinish={() => setFirstLoad(false)}
        duration={5}
      />
    );
  }

  // Show route-change loading
  if (routeLoading) {
    return (
      <AppLoadingBar
        logoUrl="/assets/lizardinteractive.png"
        text="Loading..."
        duration={1.5}
        onFinish={() => setRouteLoading(false)}
      />
    );
  }


  return (
    <LizardMainContainer>
      <Outlet />
      <LizardInteractiveNavigationControlSection />
    </LizardMainContainer>
  );
}
