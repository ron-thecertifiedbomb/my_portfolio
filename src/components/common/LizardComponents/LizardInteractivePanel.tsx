import { LizardImage, LizardText } from "@/components/common/LizardComponents";
import { useLizardStore } from "@/store/lizardStore";
import { appData } from "@/config/appData";

export function LizardInteractivePanel() {
  const {
    setCurrentScreen,
    hoveredPanel,
    setHoveredPanel,
    activePanel,
    setActivePanel,
  } = useLizardStore();

  // Panels show if hovering button or hovering a panel or active panel exists
  const showPanels = hoveredPanel === "show" || !!activePanel || hoveredPanel !== undefined;

  if (!showPanels) return null;

  return (
    <div className="absolute bottom-full mb-2 flex gap-4 w-full justify-center transition-all duration-500 ease-in-out">
      {appData.navigationPanels.map((panel) => {
        const isActive = activePanel === panel.key;

        return (
          <div
            key={panel.key}
            className={`box-content rounded-sm w-full max-w-[300px] pl-2 flex flex-col transition-colors duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg ${isActive
                ? "bg-[#E84A4A]" // active background
                : "bg-[#242425] hover:bg-white/10"
              }`}
            onClick={() => {
              setCurrentScreen(panel.screen);
              setActivePanel(panel.key); // set active
              setHoveredPanel(undefined); // hide panels after click
              console.log("Active screen:", panel.screen);
            }}
            onMouseEnter={() => setHoveredPanel(panel.key)} // hovering a panel keeps it visible
            onMouseLeave={() => setHoveredPanel(undefined)} // stops hovering, may hide
          >
            <div className="w-full bg-transparent relative overflow-hidden">
              <LizardText
                variant="h1"
                className="text-[20px] pl-3 py-2 text-white font-light uppercase"
              >
                {panel.heading.toUpperCase()}
              </LizardText>

              <LizardImage
                src="/assets/union.png"
                alt="logo"
                objectFit="contain"
                className="h-15 w-15 absolute right-[-20px] top-[-3px] rotate-62 invert opacity-10"
              />
            </div>

            <div className="bg-black flex-1 flex">
              <LizardText
                variant="h1"
                className="text-[14px] p-3 text-white font-light uppercase"
              >
                {panel.content}
              </LizardText>
            </div>
          </div>
        );
      })}
    </div>
  );
}
