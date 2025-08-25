import { LizardImage } from "@/components/common/LizardComponents/LizardImage";
import { LizardText } from "@/components/common/LizardComponents/LizardText";

interface CenterData {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description?: string;
}

interface LizardCenterCardProps {
  centerData: CenterData;
  className?: string;
}

export function LizardCenterCard({
  centerData,
  className = "",
}: LizardCenterCardProps) {
  const { imageSrc, imageAlt = "logo", title, description } = centerData;

  return (
    <div
      className={`
    w-full flex flex-row items-center
    rounded-sm border-[0.5px] border-[rgba(255,255,255,0.1)]
    shadow-md backdrop-blur-sm bg-white/5
    transition-shadow duration-300 ease-in-out
    hover:shadow-lg hover:bg-white/10
        cursor-pointer
    ${className}
  `}
    >
      {/* Image (left) */}
      <div className="flex-shrink-0 flex justify-center items-center p-4 border-r border-[rgba(255,255,255,0.1)]">
        <LizardImage
          src={imageSrc}
          alt={imageAlt}
          objectFit="contain"
          className="w-12 h-auto"
        />
      </div>

      {/* Content (right) */}
      <div className="flex flex-col p-4">
        <LizardText
          variant="h4"
          className="font-iceland text-[25px] text-[#E84A4A] font-medium uppercase"
        >
          {title}
        </LizardText>

        {description && (
          <LizardText
            variant="p"
            className="text-[14px] text-[#b3b3b3] font-light leading-snug tracking-wide uppercase"
          >
            {description}
          </LizardText>
        )}
      </div>
    </div>
  );
}
