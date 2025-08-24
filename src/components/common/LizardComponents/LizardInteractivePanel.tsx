import { LizardImage, LizardText } from "@/components/common/LizardComponents";

interface LizardInteractivePanelProps {
  heading: string;
  content: string;
  logoSrc?: string;
  className?: string; // added className prop
}

export function LizardInteractivePanel({
  heading,
  content,
  logoSrc,
  className = "", // default empty string
}: LizardInteractivePanelProps) {
  return (
    <div
      className={`box-content w-full max-w-[300px] bg-[#242425] pl-2 ${className}`}
    >
      <div className="w-full bg-transparent relative overflow-hidden">
        <LizardText
          variant="h1"
          className="text-[20px] pl-3 text-white font-light uppercase"
        >
          {heading.toUpperCase()}
        </LizardText>

        {logoSrc && (
          <LizardImage
            src={logoSrc}
            alt="logo"
            objectFit="contain"
            className="h-15 w-15 absolute right-[-15px] top-[-5px] rotate-62 invert"
          />
        )}
      </div>

      <div className="bg-black">
        <LizardText
          variant="h1"
          className="text-[14px] p-3 text-white font-light uppercase"
        >
          {content}
        </LizardText>
      </div>
    </div>
  );
}
