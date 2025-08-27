import { useScrollToHeroOnLoad } from '@/hooks/useScrollToTopWithHeader'
import { LizardSection, IntroductionScreen, SkillsScreen, ProjectScreen, AboutMeScreen, LizardProfileCard, LizardCardStyle } from '@/components/common/LizardComponents'
import { useLizardStore } from '@/store/lizardStore'

export default function Home() {
  useScrollToHeroOnLoad()

  const cardData = [
    { label: "name", value: "ronan sibunga" },
    { label: "occupation", value: "fullstack developer" },
    { label: "corporation", value: "lizard interactive" },
    { label: "availability", value: "open for hire", valueClassName: "text-[18px] px-2 py-1 mt-2 uppercase tracking-tight text-black bg-[#E84A4A] w-full leading-none mb-1" },
    { label: "social", value: "open connection", valueClassName: "text-[18px] px-2 py-1 mt-2 uppercase tracking-tight text-[#E84A4A] border-2 border-[#E84A4A] w-full leading-none" },
  ];

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
        <LizardCardStyle items={cardData} logoClassName={'w-12 h-auto fill-white'} />
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
