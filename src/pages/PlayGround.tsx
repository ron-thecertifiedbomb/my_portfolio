import { AppMainContainer, AppSectionContainer } from "@/components/layout";
import { LizardCard } from "@/components/common";
import {
  LizardCardGrid,
  LizardCenterCard,
} from "@/components/common/LizardComponents";
import { centerCard } from "@/utils/lizardinteractivemockdata";

export function PlayGround() {
  return (
    <AppMainContainer className="w-screen h-screen flex items-center justify-center bg-black">
      <AppSectionContainer
        className="
          w-full
          h-screen
          max-w-[1400px]
          flex flex-col items-center 
          border-[0.5px] border-[rgba(255,255,255,0.1)]
          shadow-[0_0_40px_10px_rgba(0,0,0,0.3)]
          bg-black
          rounded-2xl
          bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(130,12,12,0.18)_14%,rgba(0,0,0,1)_150%)]
          p-6
        "
      >
        
        <div className="flex justify-center gap-2">
          <LizardCard
            title="My Services"
            subtitle="Your short description here."
            badge="Technology"
            logoSrc="/assets/lizardinteractive.svg"
          />
          <LizardCardGrid
            cards={centerCard}
            component={LizardCenterCard}
          />
          <LizardCard
            title="Experiences"
            subtitle="MY SHORT DESCRIPTION HERE"
            badge="About Me"
            logoSrc="/assets/lizardinteractive.svg"
          />
        </div>
      </AppSectionContainer>
    </AppMainContainer>
  );
}
