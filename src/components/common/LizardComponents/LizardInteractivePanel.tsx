import { LizardImage, LizardText } from "@/components/common/LizardComponents";
import { useLizardStore } from "@/store/lizardStore";
import { appData } from "@/config/appData";

export function LizardInteractivePanel() {
  const { setCurrentScreen, activePanel, setActivePanel, showPanel, setShowPanel } =
    useLizardStore();

  return (
    // Outer container with overflow-hidden
    <div className="fixed bottom-17 overflow-hidden flex justify-center">
      <div
        className={`inline-flex justify-center gap-4 transition-transform duration-500 ease-in-out
      ${showPanel ? "translate-y-0" : "translate-y-full pointer-events-none"}
    `}
      >
        {appData.navigationPanels.map((panel) => {
          const isActive = activePanel === panel.key;

          return (
            <div
              key={panel.key}
              className={`box-content rounded-sm w-full max-w-[300px] flex flex-col pl-2 transition-colors duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg ${isActive ? "bg-[#E84A4A]" : "bg-[#242425] hover:bg-white/10"
                }`}
              onClick={() => {
                setCurrentScreen(panel.screen);
                setActivePanel(panel.key);
                setShowPanel(false); // slide down after selection
              }}
            >
              <div className="w-full relative overflow-hidden">
                <div className="text-[25px] pl-3 py-1 text-white font-light">
                  <LizardText variant="h1">{panel.heading.toUpperCase()}</LizardText>
                </div>
                <LizardImage
                  src="/assets/union.png"
                  alt="logo"
                  objectFit="contain"
                  className="h-15 w-15 absolute right-[-20px] top-[-3px] rotate-62 invert opacity-10"
                />
              </div>

              <div className="bg-black flex-1 flex px-2 min-h-[100px]">
                <LizardText variant="h1" className="text-[14px] p-3 text-[#b3b3b3] font-light">
                  {panel.content.toUpperCase()}
                </LizardText>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
