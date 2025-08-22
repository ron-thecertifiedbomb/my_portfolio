import { AppLabel } from "@/components/common";
import { AppMainContainer, AppSectionContainer } from "@/components/layout";
import { slideDown } from "@/lib/motionMode";

export function PlayGround() {
  return (
    <AppMainContainer className="w-screen h-screen flex items-center justify-center">
      <AppSectionContainer
        className="w-full max-w-[1400px] flex flex-col mx-auto gap-4 mt-24"
        mode={slideDown}
      >
        <AppLabel variant="h1">
          Taxing Laughter: The Joke Tax Chronicles
        </AppLabel>
      </AppSectionContainer>
    </AppMainContainer>
  );
}
