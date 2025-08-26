import LizardLogoSVG from "@/components/assets/lizardicon.svg";
import { Button } from "@/components/ui/button";
import { LizardLogoContainer } from "./LizardLogoContainer";

interface LizardInteractiveButtonProps {
  onClick?: () => void;
 
  className?: string; // extra Tailwind classes for the image
}

export function LizardInteractiveButton({
  onClick,
  className

}: LizardInteractiveButtonProps) {
  // Cast the imported SVG properly
  const LizardLogo = LizardLogoSVG as unknown as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

  return (

    <div
      onClick={onClick}
      className={`${className} cursor-pointer`}
  
    >
      <LizardLogoContainer
        svg={LizardLogo}
        className="w-12 h-12 fill-[#88fb59ff] stroke-[#88fb59ff]"
      />
    </div>

  );
}
