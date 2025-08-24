
import { LizardInteractivePanels } from "@/components/common/LizardComponents/LizardInteractivePanels";
import { AppMainContainer, AppSectionContainer } from "@/components/layout";

export function PlayGround() {
  return (
    <AppMainContainer className="w-screen h-screen flex items-center justify-center bg-black">
      <AppSectionContainer className="w-full h-screen flex items-center justify-center bg-black">
        {" "}
        <LizardInteractivePanels />
      </AppSectionContainer>
    </AppMainContainer>
  );
}
