import { LizardInteractivePanel } from "@/components/common/LizardComponents/LizardInteractivePanel";
import { LizardInteractiveButton } from "@/components/common/LizardInteractiveButton";
import { AppSectionContainer } from "@/components/layout";
import { navigationPanels } from "@/config/";

interface LizardInteractiveNavigationControlSectionProps {
  className?: string; // optional className prop
}

export function LizardInteractiveNavigationControlSection({
  className = "",
}: LizardInteractiveNavigationControlSectionProps) {
  return (

    <AppSectionContainer
      className={`w-full h-auto max-w-[1400px] flex justify-center items-center bg-transparent ${className}`}
    >
      <div className="flex w-full gap-4">
        {navigationPanels.map((panel) => (
          <LizardInteractivePanel
            key={panel.key}
            heading={panel.heading}
            content={panel.content}
            logoSrc="/public/assets/union.png"
          />
        ))}
      </div>
      <LizardInteractiveButton src="/assets/lizardinteractive.svg" alt="Logo" />
    </AppSectionContainer>
  );
  
}
