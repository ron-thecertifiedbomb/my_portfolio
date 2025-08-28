import React from "react";
import { cn } from "@/lib/utils";

import { LizardAnimatedBackground } from "../LizardAnimatedBackground";
import { useNavigationStore } from "@/store";


interface LizardSubContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function LizardSubContainer({ children, className = "" }: LizardSubContainerProps) {
  const { currentScreen } = useNavigationStore();

  const isIntroScreen = currentScreen === "IntroductionScreen";

  return (
    <main
      id="lizard-sub-container"
      className={cn(
        "relative flex-1 w-full flex flex-col items-center justify-start overflow-y-auto scroll-smooth",
        className
      )}
    >
      {/* Render animated background only on IntroductionScreen */}
      {isIntroScreen && (
        <LizardAnimatedBackground className="absolute inset-0 w-full h-full -z-10" />
      )}

      {children}
    </main>
  );
}
