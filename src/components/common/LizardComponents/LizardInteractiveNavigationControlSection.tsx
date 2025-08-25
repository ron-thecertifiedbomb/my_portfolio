// LizardInteractiveNavigationControlSection.tsx
import { LizardInteractivePanel } from "@/components/common/LizardComponents/LizardInteractivePanel";
import { LizardInteractiveButton } from "@/components/common/LizardComponents/LizardInteractiveButton";
import { useLizardStore } from "@/store/lizardStore";

export function LizardInteractiveNavigationControlSection({ className = "" }) {
  const { hoveredPanel, setHoveredPanel } = useLizardStore();

  const togglePanel = () => {
    setHoveredPanel(hoveredPanel ? undefined : "show");
  };

  return (
    <div className={`relative flex-col w-full h-auto flex justify-center items-center ${className}`}>
      <div className="relative flex flex-col items-center justify-center w-full max-w-[1100px]">

        {/* Panels container */}
        {hoveredPanel && (
          <div className="absolute bottom-full mb-2 flex gap-4 w-full justify-center transition-all duration-500 ease-in-out">
            <LizardInteractivePanel />
          </div>
        )}

        {/* Button */}
        <div
          className="py-2 relative z-10 cursor-pointer mx-auto"
          onClick={togglePanel} // click toggles panels
        >
          <LizardInteractiveButton src="/assets/lizardinteractive.svg" alt="Logo" />
        </div>
      </div>
    </div>
  );
}
