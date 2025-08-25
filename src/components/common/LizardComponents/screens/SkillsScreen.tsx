import { LizardCard, LizardThumbnail } from '@/components/common'
import { LizardCenterCard, LizardText } from '@/components/common/LizardComponents'

export function SkillsScreen() {
  return (
    <>
      <LizardText className="text-[18px] text-white font-light uppercase mb-4 text-center">
        Craftmanship
      </LizardText>

      <div className="flex flex-wrap justify-center items-start gap-4">
        <LizardThumbnail
          title="Progress"
          content="I have created a set of achievements for myself and I use this page to track them."
          badge="Technology"
          logoSrc="/assets/lizardinteractive.svg"
   
        />

        <LizardCenterCard className='flex-1 min-w-[250px] max-w-[620px]' />

        <LizardCard
          badge="Technologies"
          logoSrc="/assets/lizardinteractive.svg"
          className="flex-1 min-w-[200px] max-w-[220px] min-h-[200px]"
        />
      </div>
    </>
  )
}
