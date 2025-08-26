import { LizardLogo } from "@/components/common";
import { LizardText } from "@/components/common/LizardComponents";


export function PlayGround() {
  return (

    <div className="max-w-[300px] flex flex-col w-full h-auto">
      {/* Logo Box with Corner Borders */}
      <div className="relative p-[19px] w-full border flex items-center justify-center">
        <LizardLogo className="fill-amber-50 w-30 h-30" />

        {/* Top Left Corner */}
        <div className="absolute top-0 left-0">
          <div className="w-[20px] border-t-2 border-[#E84A4A]"></div>
          <div className="h-[20px] border-l-2 border-[#E84A4A]"></div>
        </div>

        {/* Top Right Corner */}
        <div className="absolute top-0 right-0">
          <div className="w-[20px] border-t-2 border-[#E84A4A]"></div>
          <div className="h-[20px] border-r-2 border-[#E84A4A]"></div>
        </div>

        {/* Bottom Left Corner */}
        <div className="absolute bottom-0 left-0">
          <div className="w-[20px] border-b-2 border-[#E84A4A]"></div>
          <div className="h-[20px] border-l-2 border-[#E84A4A]"></div>
        </div>

        {/* Bottom Right Corner */}
        <div className="absolute bottom-0 right-0">
          <div className="w-[20px] border-b-2 border-[#E84A4A]"></div>
          <div className="h-[20px] border-r-2 border-[#E84A4A]"></div>
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
            lizard interactive
          </LizardText>
        </div>

        <div className="w-full">
          <LizardText className="leading-none uppercase mb-1">availability</LizardText>
          <div className="w-full bg-[#E84A4A]">
            <LizardText className="text-3xl text-black leading-tight px-2 uppercase">
              open for hire
            </LizardText>
          </div>
        </div>
      </div>
    </div>



  );
}
