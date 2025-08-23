import { AppImage, AppLabel, LizardCard } from "@/components/common";
import { AppMainContainer, AppSectionContainer } from "@/components/layout";

export function PlayGround() {
  return (
    <AppMainContainer className="w-screen h-screen flex items-center justify-center bg-black">
      <AppSectionContainer
        className="
          w-full
          h-screen
          max-w-[1400px]
          flex justify-center pt-20 gap-3
          bg-black
          rounded-2xl
          border-[0.5px] border-[rgba(255,255,255,0.1)]
          shadow-[0_0_40px_10px_rgba(0,0,0,0.3)]
          bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(130,12,12,0.18)_14%,rgba(0,0,0,1)_150%)]
        "
      >
        <LizardCard
          title="My Services"
          subtitle="Your short description here."
          badge="Technology"
          logoSrc="/assets/lizardinteractive.svg"
        />

        {/* Middle custom card */}
        <div
          className="
            w-[469px]
            h-[100px]
            rounded-2xl
            bg-black
            border border-[rgba(255,255,255,0.1)]
            shadow-[0_4px_20px_rgba(0,0,0,0.3)]
            [background:linear-gradient(90deg,rgba(0,0,0,0.20)_0%,rgba(200,50,71,0.14)_0%,rgba(0,0,0,0.10)_100%)]
            flex items-center
     
          "
        >
          {/* Image and Text with border */}
          <div className="flex items-center h-full w-full">
            {/* Image */}
            <div className="flex items-center justify-center h-full px-5 border-r border-[rgba(255,255,255,0.2)] opacity-50">
              <AppImage
                src="/assets/lizardinteractive.svg"
                alt="logo"
                objectFit="contain"
                className="w-18 sm:w-20 lg:w-20 h-auto"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col  justify-start w-full h-full pl-4 py-2">
              <AppLabel
                variant="h4"
                className="text-[20px] text-white font-light opacity-70 tracking-[0.1em] "
              >
                WELCOME TO MY SITE
              </AppLabel>
              <AppLabel
                variant="p"
                className="text-[12px] text-white font-extralight opacity-70 tracking-[0.1em] "
              >
                Im a fullstack developer and multimedia artist
              </AppLabel>
            </div>
          </div>
        </div>

        <LizardCard
          title="Experiences"
          subtitle="Your short description here."
          badge="About Me"
          logoSrc="/assets/lizardinteractive.svg"
        />
      </AppSectionContainer>
    </AppMainContainer>
  );
}
