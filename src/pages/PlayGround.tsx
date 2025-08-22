import {
  AppDialog,
  AppImage,
  AppLabel,
  LizardInteractiveButton,
} from "@/components/common";
import { AppMainContainer, AppSectionContainer } from "@/components/layout";
import { Button } from "@/components/ui/button";

export function PlayGround() {
  return (
    <AppMainContainer className="w-screen h-screen flex items-center justify-center">
      <AppSectionContainer className="w-full h-screen max-w-[1400px] flex justify-center items-center">
        <LizardInteractiveButton
          src="/assets/lizardinteractive.svg"
          alt="Logo"
        />
      </AppSectionContainer>
    </AppMainContainer>
  );
}
