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
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] w-full max-w-[1900px] gap-4 h-screen">
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
