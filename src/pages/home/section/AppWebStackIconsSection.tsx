import Marquee from "react-fast-marquee";
import { AppTechStackLogos } from "@/components/common";
import { AppContentContainer } from "@/components/layout";
import { webTechStack } from "@/config/techstack";


export function AppWebStackIconsSection() {
  return (
    <AppContentContainer>
      <AppContentContainer >
        <Marquee speed={40} direction="right" pauseOnHover gradient={false}>
          {webTechStack.map((tech) => (
            <div
              key={tech.label}
              className="flex-shrink-0 flex items-center justify-center mx-4"
            >
              <AppTechStackLogos
                stack={[tech]}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              />
            </div>
          ))}
        </Marquee>
      </AppContentContainer>
    </AppContentContainer>
  );
}
