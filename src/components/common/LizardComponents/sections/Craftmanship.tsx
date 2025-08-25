import { LizardCard, LizardThumbnail } from '@/components/common'
import {
  LizardCardGrid,
  LizardCenterCard,
  LizardText,
} from '@/components/common/LizardComponents'
import { skills } from '@/config'

export function CraftmanshipSection() {
  return (
    <>
      <LizardText className="text-[18px] text-white font-light uppercase mb-4 text-center">
        Craftmanship
      </LizardText>

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
    </>
  )
}
