import { LizardCard, LizardThumbnail } from "@/components/common";
import {
  LizardCardGrid,
  LizardCenterCard,
  LizardSection,
  LizardText,
} from "@/components/common/LizardComponents";
import { LizardLogo } from "@/components/common/LizardComponents/LizardLogo";
import { skills } from "@/config";
import { centerCard } from "@/utils/lizardinteractivemockdata";

export function CraftmanshipSection() {


  return (
    <LizardSection
      className="
      box-content
          w-full
          flex  
          flex-col 
          flex-1
          pt-8
          border-[0.5px] border-[rgba(255,255,255,0.1)]
          shadow-[0_0_40px_10px_rgba(0,0,0,0.3)]
          bg-black
          rounded-sm
          bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(130,12,12,0.18)_14%,rgba(0,0,0,1)_150%)]"
    >
      <LizardText className="text-[18px] text-white font-light uppercase mb-4 text-center">
        Craftmanship
      </LizardText>
      <LizardLogo className="w-32 h-32 text-blue-500" />

      <div className="flex justify-center gap-2">
        <LizardThumbnail
          title="Progress"
          content="I have created a set of achievements for myself and I use this page to track them."
          badge="Technology"
          logoSrc="/assets/lizardinteractive.svg"
        />

        <LizardCardGrid cards={skills} component={LizardCenterCard} />
        <LizardCard
          title="Experiences"
          subtitle="MY SHORT DESCRIPTION HERE"
          badge="Technology"
          logoSrc="/assets/lizardinteractive.svg"
        />
      </div>
    </LizardSection>
  );
}
