import { AppImage, AppLabel } from "@/components/common";

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
        w-[184px]
        h-[248px]
        rounded-2xl
        bg-black
        overflow-hidden
        border border-[rgba(255,255,255,0.1)]
        shadow-[0_4px_20px_rgba(0,0,0,0.3)]
        [background:linear-gradient(90deg,rgba(0,0,0,0.20)_0%,rgba(200,50,71,0.14)_0%,rgba(0,0,0,0.10)_100%)]
        p-4
      "
    >
      {/* Badge */}
      {badge && (
        <div className="bg-red-500 px-2 py-0.5 rounded-sm opacity-60 flex mb-1 w-full justify-center items-center">
          <AppLabel className="text-[8px] text-white font-light">
            {badge}
          </AppLabel>
        </div>
      )}

      {/* Faint watermark SVG */}
      {logoSrc && (
        <AppImage
          src={logoSrc}
          alt="logo"
          objectFit="contain"
          className="absolute top-30 right-1 transform -translate-y-1/2 w-18 sm:w-16 lg:w-80 h-auto opacity-[0.03]"
        />
      )}

      {/* Card content */}
      <div className="flex flex-col items-start justify-start h-full mt-2">
        <AppLabel className="text-[10px] text-white font-light">
          {title}
        </AppLabel>
        {subtitle && (
          <AppLabel
            variant="p"
            className="text-[4px] font-extralight text-gray-300"
          >
            {subtitle}
          </AppLabel>
        )}
      </div>
    </div>
  );
}
