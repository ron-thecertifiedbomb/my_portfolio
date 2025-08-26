// LizardInteractiveNavigationControlSection.tsx
import { LizardInteractiveButton } from "@/components/common/LizardComponents/LizardInteractiveButton";
import { useLizardStore } from "@/store/lizardStore";

export function LizardInteractiveNavigationControlSection() {

  const { showPanel, setShowPanel } = useLizardStore();
  const togglePanel = () => setShowPanel(!showPanel);

  console.log(showPanel)

  return (
    
    <div className=" flex  mx-auto">

        <LizardInteractiveButton src="/assets/lizardinteractive.svg" alt="Logo" onClick={togglePanel} />
 
      </div>
  
  );
}
