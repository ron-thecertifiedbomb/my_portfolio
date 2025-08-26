// LizardInteractiveNavigationControlSection.tsx
import { LizardInteractiveButton } from "@/components/common/LizardComponents/LizardInteractiveButton";
import { useLizardStore } from "@/store/lizardStore";

export function LizardInteractiveNavigationControlSection() {

  const { showPanel, setShowPanel } = useLizardStore();
  const togglePanel = () => setShowPanel(!showPanel);

  console.log(showPanel)

  return (
    
    <div className=" flex  mx-auto p-2">

        <LizardInteractiveButton  onClick={togglePanel} />
 
      </div>
  
  );
}
