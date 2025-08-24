
import { LizardImage } from "@/components/common/LizardComponents/LizardImage";
import { LizardText } from "@/components/common/LizardComponents/LizardText";

interface LizardCenterCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function LizardCenterCard({
  imageSrc,
  imageAlt = "logo",
  title,
  subtitle,
  className,
}: LizardCenterCardProps) {
  return (
    <div
      className={`
    flex items-center max-w-[600px] w-full
    border border-white/10 rounded-xl shadow-md
    bg-gradient-to-r from-black/20 via-red-600/20 to-black/10
    ${className}
  `}
    >
      <div className="flex justify-center h-full px-5 py-4 border-r border-[rgba(255,255,255,0.2)]">
        <LizardImage
          src={imageSrc}
          alt={imageAlt}
          objectFit="contain"
          className="w-18 sm:w-20 lg:w-15 h-auto"
        />
      </div>

      <div className="flex flex-col w-full h-full px-5 py-2">
        <LizardText
          variant="h4"
          className="text-[14px] text-white font-light  tracking-[0.1em] mb-[3.92px]"
        >
          {title}
        </LizardText>

        {subtitle && (
          <LizardText
            variant="p"
            className="text-[12px] text-[#7A7A7A] font-extralight opacity-100 tracking-[0.1em]"
          >
            {subtitle}
          </LizardText>
        )}
      </div>
    </div>
  );
}
