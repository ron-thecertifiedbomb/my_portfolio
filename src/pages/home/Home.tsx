import { useScrollToHeroOnLoad } from '@/hooks/useScrollToTopWithHeader'
import { LizardSection, IntroductionScreen, SkillsScreen, ProjectScreen, AboutMeScreen, LizardProfileCard } from '@/components/common/LizardComponents'
import { useLizardStore } from '@/store/lizardStore'

export default function Home() {
  useScrollToHeroOnLoad()

  const { currentScreen } = useLizardStore()

  const renderScreen = () => {
    switch (currentScreen) {
      case 'IntroductionScreen':
        return <IntroductionScreen />
      case 'ProjectsScreen':
        return <ProjectScreen />
      case 'SkillsScreen':
        return <SkillsScreen />
      case 'AboutMeScreen':
        return <AboutMeScreen />

      default:
        return <IntroductionScreen />
    }
  }

  return (
    <div className="flex flex-row flex-1 gap-4 w-full max-w-[1600px]">
  {/* Left fixed card */}
  <div className="flex-none">
    <LizardProfileCard />
  </div>

  {/* Center section stretches automatically */}
  <LizardSection className="flex flex-col w-full">
    {renderScreen()}
  </LizardSection>

  {/* Right fixed card */}
  <div className="flex-none">
    <LizardProfileCard />
  </div>
</div>
  )
}
