import { useRef, useEffect } from "react";
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

  const containerRef = useRef<HTMLDivElement>(null);

  // Hide panels on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setHoveredPanel(undefined);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setHoveredPanel]);

  // Only show panels if button was clicked
  if (hoveredPanel !== "show") return null;

  return (
    <div
      ref={containerRef}
      className="absolute bottom-full mb-2 flex gap-4 w-full justify-center transition-transform duration-500 ease-in-out transform translate-y-0"
    >
      {appData.navigationPanels.map((panel) => {
        const isActive = activePanel === panel.key;

        return (
          <div
            key={panel.key}
            className={`box-content rounded-sm w-full max-w-[300px] pl-2 flex flex-col transition-colors duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg ${isActive ? "bg-[#E84A4A]" : "bg-[#242425] hover:bg-white/10"
              }`}
            onClick={() => {
              setCurrentScreen(panel.screen);
              setActivePanel(panel.key); // mark active
              setHoveredPanel(undefined); // hide panel container
              console.log("Active screen:", panel.screen);
            }}
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
