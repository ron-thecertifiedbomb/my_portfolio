import { LizardImage, LizardText } from "@/components/common/LizardComponents";

interface LizardInteractivePanelProps {
  heading: string;
  content: string;
  logoSrc?: string;
  className?: string; // added className prop
  onMouseEnter?: () => void; // added
  onMouseLeave?: () => void; // added
}

export function LizardInteractivePanel({
  heading,
  content,
  logoSrc,
  className = "",
  onMouseEnter,
  onMouseLeave,
}: LizardInteractivePanelProps) {
  return (
    <div
      className={`box-content rounded-sm w-full max-w-[300px] bg-[#242425] pl-2 flex flex-col transition-colors duration-300 ease-in-out hover:bg-white/10 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-full bg-transparent relative overflow-hidden">
        <LizardText
          variant="h1"
          className="text-[20px] pl-3 py-2 text-white font-light uppercase"
        >
          {heading.toUpperCase()}
        </LizardText>

        {logoSrc && (
          <LizardImage
            src={logoSrc}
            alt="logo"
            objectFit="contain"
            className="h-15 w-15 absolute right-[-20px] top-[-3px] rotate-62 invert opacity-10"
          />
        )}
      </div>

      <div className="bg-black flex-1 flex">
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
