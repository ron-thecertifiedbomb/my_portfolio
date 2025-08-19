import { Outlet } from "react-router";
import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";
import { AppMainContainer } from "./app-maincontainer";
import { AppSectionContainer } from "./app-sectioncontainer";

export function AppLayout() {
  return (
    <AppMainContainer>
      <AppSectionContainer component={<AppHeader />} />
      <AppSectionContainer component={<Outlet />} />
      <AppSectionContainer component={<AppFooter />} />
    </AppMainContainer>
  );
}
