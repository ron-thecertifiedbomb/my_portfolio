import { AppLabel, AppCard } from "@/components/common";
import { AppContentContainer } from "@/components/layout";

export function AppAboutMe() {
  return (
    <AppContentContainer className="p-4 sm:p-6 lg:p-8">
      <AppLabel variant="h1" className="mb-4 md:mb-6 lg:mb-8">
        About Me
      </AppLabel>
      <AppCard description="I’m a passionate React Developer with extensive experience building dynamic, high-performance applications for both web and mobile platforms." />
    </AppContentContainer>
  );
}
