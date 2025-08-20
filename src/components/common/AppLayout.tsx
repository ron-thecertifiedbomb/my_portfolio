import { Outlet } from "react-router";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { AppMainContainer } from "../layout/AppMainContainer";
import { AppSectionContainer } from "../layout/AppSectionContainer";

export function AppLayout() {
  return (
    <AppMainContainer>
      <AppSectionContainer component={<AppHeader />} />
      <AppSectionContainer component={<Outlet />} />
      <AppSectionContainer component={<AppFooter />} />
    </AppMainContainer>
  );
}
