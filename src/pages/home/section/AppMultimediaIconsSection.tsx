import { AppMarquee } from "@/components/common";
import { AppContentContainer } from "@/components/layout";
import { multimediaStack } from "@/config/techstack";
import React from "react";

export function AppMultimediaIconsSection() {
  return (
    <AppContentContainer className="overflow-hidden my-1 mx-auto w-[240px]">
      <AppMarquee speed={40} direction="right" gap={16}>
        {multimediaStack.map((tech) => (
          <div
            key={tech.label}
            className="flex-shrink-0 flex items-center justify-center"
          >
            {React.isValidElement(tech.icon)
              ? React.cloneElement(tech.icon as React.ReactElement<any>, {
                  className: `${
                    (tech.icon as React.ReactElement<any>).props.className ?? ""
                  }  w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14`,
                })
              : tech.icon}
          </div>
        ))}
      </AppMarquee>
    </AppContentContainer>
  );
}
