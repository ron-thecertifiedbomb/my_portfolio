import { useState } from "react";
import { LizardInteractivePanel } from "@/components/common/LizardComponents/LizardInteractivePanel";
import { LizardInteractiveButton } from "@/components/common/LizardInteractiveButton";
import { navigationPanels } from "@/config/";

interface LizardInteractiveNavigationControlSectionProps {
  className?: string;
}

export function LizardInteractiveNavigationControlSection({
  className = "",
}: LizardInteractiveNavigationControlSectionProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative flex-col w-full h-auto flex justify-center items-center bg-transparent ${className}` }
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-[1400px]">
        {/* Panel slides up from button */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`absolute bottom-full mb-2 flex gap-4 transition-all duration-500 ease-in-out w-full justify-center
            ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          {navigationPanels.map((panel) => (
            <LizardInteractivePanel
              key={panel.key}
              heading={panel.heading}
              content={panel.content}
              logoSrc="/assets/union.png"
              className="transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-[rgba(255,255,255,0.1)]"
            />
          ))}
        </div>

        {/* Button on top */}
        <div
          className="py-2 relative z-10 cursor-pointer mx-auto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <LizardInteractiveButton
            src="/assets/lizardinteractive.svg"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
}
