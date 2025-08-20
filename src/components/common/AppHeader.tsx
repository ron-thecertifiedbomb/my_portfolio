import { AppContentContainer } from "../layout/AppContentContainer";
import { AppSidebar } from "../app-sidebar";
import { ModeToggle } from "../mode-toggle";
import { useFetchLogo } from "@/hooks/fetchLogo";
import { AppLogo } from "./AppLogo";

export function AppHeader() {
  const logoUrl = useFetchLogo("portfolio-assets", "logo.png");

  return (
    <AppContentContainer className="sticky top-0 z-50 bg-background">
      <header className="w-full flex items-center justify-between h-14 border-b sm:px-2">
        <AppLogo logoUrl={logoUrl} />
        <section className="flex items-center justify-center">
          <AppSidebar />
          <ModeToggle />
        </section>
      </header>
    </AppContentContainer>
  );
}
