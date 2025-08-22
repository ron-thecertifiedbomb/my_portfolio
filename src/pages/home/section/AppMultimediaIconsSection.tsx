import Marquee from "react-fast-marquee";
import { AppTechStackLogos } from "@/components/common";
import { AppContentContainer } from "@/components/layout";
import { multimediaStack } from "@/config/techstack";

export function AppMultimediaIconsSection() {
  return (
    <AppContentContainer>
      <AppContentContainer className="overflow-hidden my-1 mx-auto w-[280px] sm:w-[360px] lg:w-[420px]  ">
        <Marquee speed={40} direction="left" pauseOnHover gradient={false}>
          {multimediaStack.map((tech) => (
            <div
              key={tech.label}
              className="flex-shrink-0 flex items-center justify-center mx-4"
            >
              <AppTechStackLogos
                stack={[tech]}
                className="w-10 h-10 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
              />
            </div>
          ))}
        </Marquee>
      </AppContentContainer>
    </AppContentContainer>
  );
}
