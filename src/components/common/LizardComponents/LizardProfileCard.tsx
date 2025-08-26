import { LizardLogo } from "@/components/common";
import { LizardText } from "@/components/common/LizardComponents";

export function LizardProfileCard() {
  return (
    <div className="max-w-[300px] w-full h-auto">
      {/* Logo block with corner accents */}
      <div className="relative p-[19px] w-full flex items-center justify-center border">
        <LizardLogo className="fill-amber-50 w-30 h-30" />

        {/* Corner borders overlay (no full border) */}
        <div className="pointer-events-none absolute inset-0">
          {/* Top Left */}
          <div className="absolute top-0 left-0">
            <div className="w-[20px] border-t-2 border-[#E84A4A]" />
            <div className="h-[20px] border-l-2 border-[#E84A4A]" />
          </div>
          {/* Top Right */}
          <div className="absolute top-0 right-0">
            <div className="w-[20px] border-t-2 border-[#E84A4A]" />
            <div className="h-[20px] border-r-2 border-[#E84A4A]" />
          </div>
          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0">
            <div className="h-[20px] border-l-2 border-[#E84A4A]" />
            <div className="w-[20px] border-b-2 border-[#E84A4A]" />
          </div>
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0">
            <div className="h-[20px] border-r-2 border-[#E84A4A]" />
            <div className="w-[20px] border-b-2 border-[#E84A4A]" />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col items-start mt-8 gap-4 w-full">
        <div>
          <LizardText className="leading-none mb-1">NAME</LizardText>
          <LizardText className="text-3xl text-[#E84A4A] leading-none whitespace-nowrap uppercase">
            Ronan Sibunga
          </LizardText>
        </div>

        <div>
          <LizardText className="leading-none uppercase mb-1">Occupation</LizardText>
          <LizardText className="text-3xl text-[#E84A4A] leading-none whitespace-nowrap uppercase">
            Fullstack Developer
          </LizardText>
        </div>

        <div>
          <LizardText className="leading-none uppercase mb-1">Corporation</LizardText>
          <LizardText className="text-3xl text-[#E84A4A] leading-tight whitespace-nowrap uppercase">
            Lizard Interactive
          </LizardText>
        </div>

        <div className="w-full">
          <LizardText className="leading-none uppercase mb-1">Availability</LizardText>
          <div className="w-full bg-[#E84A4A]">
            <LizardText className="text-3xl text-black leading-tight px-2 uppercase">
              Open for Hire
            </LizardText>
          </div>
        </div>
      </div>
    </div>
  );
}
