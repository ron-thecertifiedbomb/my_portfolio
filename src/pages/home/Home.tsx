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
    <div className="flex flex-row w-full max-w-[1900px] gap-4 flex-1">
      {/* Left fixed card */}
      <div className="inline-flex">
        <LizardProfileCard />
      </div>

      <LizardSection
        className="
        box-content
        w-full
        flex  
        flex-col"
      >
        {renderScreen()}
      </LizardSection>

      {/* Right fixed card */}
      <div className="inline-flex">
        <LizardProfileCard />
      </div>
    </div>

  )
}
