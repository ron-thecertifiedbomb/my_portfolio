import { AppDialog, AppLabel } from "@/components/common";
import { AppMainContainer, AppSectionContainer } from "@/components/layout";


export function PlayGround() {
  return (
    <AppMainContainer className="w-screen h-screen flex items-center justify-center">
      <AppSectionContainer className="w-full h-screen max-w-[1400px] flex justify-center items-center bg-sky-950">
        <AppDialog />
        <div className="bg-card">

<AppLabel>Test Label</AppLabel>

        </div>
      </AppSectionContainer>
    </AppMainContainer>
  );
}
