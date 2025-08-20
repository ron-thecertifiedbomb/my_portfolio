import { Outlet } from "react-router";
import { AppHeader } from "../common/AppHeader";
import { AppFooter } from "../common/AppFooter";
import { AppMainContainer } from "./AppMainContainer";
import { AppSectionContainer } from "./AppSectionContainer";

export function AppLayout() {
  return (
    <AppMainContainer>
      <AppSectionContainer component={<AppHeader />} />
      <AppSectionContainer component={<Outlet />} />
      <AppSectionContainer component={<AppFooter />} />
    </AppMainContainer>
  );
}
