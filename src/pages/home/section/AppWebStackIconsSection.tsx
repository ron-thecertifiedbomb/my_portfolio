import { AppMarquee } from "@/components/common";
import { AppContentContainer } from "@/components/layout";
import { webTechStack } from "@/config/techstack";
import React from "react";

export function AppWebStackIconsSection() {
  return (
    <AppContentContainer >
      <AppMarquee speed={50} className="my-4" direction="left" gap={16}>
        {webTechStack.map((tech) =>
          React.isValidElement(tech.icon)
            ? React.cloneElement(tech.icon as React.ReactElement<any>, {
                className: `${
                  (tech.icon as React.ReactElement<any>).props.className ?? ""
                } w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20`,
              })
            : tech.icon
        )}
      </AppMarquee>
    </AppContentContainer>
  );
}
