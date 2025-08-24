import { LizardImage } from "@/components/common/LizardComponents/LizardImage";
import { LizardText } from "@/components/common/LizardComponents/LizardText";

interface LizardCardProps {
  title: string;
  subtitle?: string;
  badge?: string;
  logoSrc?: string;
}

export function LizardCard({
  title,
  subtitle,
  badge,
  logoSrc,
}: LizardCardProps) {
  return (
    <div
      className="
    relative
    max-w-[184px]
    max-h-[248px]
    w-full
    rounded-2xl
    overflow-hidden
    border border-white/10
    shadow-[0_4px_20px_rgba(0,0,0,0.3)]
    bg-gradient-to-r from-black/20 via-red-900/20 to-black/1
    p-4
  "
    >
      {/* Badge */}
      {badge && (
        <div className="bg-red-500 px-2 py-0.5 rounded-sm opacity-60 flex items-center justify-between mb-1 w-full relative overflow-hidden">
          <LizardText className="text-[14px] text-white font-light uppercase">
            {badge}
          </LizardText>

          {logoSrc && (
            <div className="absolute right-[-18px] top-5 -translate-y-1/2 w-10 h-10 pointer-events-none">
              <LizardImage
                src="./assets/lizardinteractiveblack.png"
                alt="logo"
                objectFit="contain"
                className="w-6 h-6 opacity-70 scale-150"
              />
            </div>
          )}
        </div>
      )}
      {/* Faint watermark SVG */}
      {logoSrc && (
        <LizardImage
          src={logoSrc}
          alt="logo"
          objectFit="contain"
          className="absolute top-30 right-1 transform -translate-y-1/2 w-18 sm:w-16 lg:w-80 h-auto opacity-[0.03]"
        />
      )}

      {/* Card content */}
      <div className="flex flex-col items-start justify-start h-full mt-2">
        <LizardText className="text-[10px] text-white font-light">
          {title}
        </LizardText>
        {subtitle && (
          <LizardText
            variant="p"
            className="text-[4px] font-extralight text-gray-300"
          >
            {subtitle}
          </LizardText>
        )}
      </div>
    </div>
  );
}
