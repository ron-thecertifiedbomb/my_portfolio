import { AppContentContainer } from "./app-contentcontainer";
import { AppLogo } from "./app-logo";
import { AppSidebar } from "./app-sidebar";
import { ModeToggle } from "./mode-toggle";

export function AppHeader() {
  return (
    <AppContentContainer className="sticky top-0 z-50">
      <header className="w-full flex items-center justify-between h-14 border-b pl-2 pr-2">
        <AppLogo />
        <section className="flex items-center">
          <AppSidebar />
          <ModeToggle />
        </section>
      </header>
    </AppContentContainer>
  );
}
