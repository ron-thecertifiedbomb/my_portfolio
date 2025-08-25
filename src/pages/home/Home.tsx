import { useScrollToHeroOnLoad } from '@/hooks/useScrollToTopWithHeader'
import { LizardSection, IntroductionScreen, SkillsScreen } from '@/components/common/LizardComponents'
import { useLizardStore } from '@/store/lizardStore'

export default function Home() {
  useScrollToHeroOnLoad()

  const { currentScreen } = useLizardStore()

  const renderScreen = () => {
    switch (currentScreen) {
      case 'IntroductionScreen':
        return <IntroductionScreen />
      case 'SkillsScreen':
        return <SkillsScreen />
      
      default:
        return <IntroductionScreen />
    }
  }

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
        bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(130,12,12,0.18)_14%,rgba(0,0,0,1)_150%)]
      "
    >
      {renderScreen()}
    </LizardSection>
  )
}
