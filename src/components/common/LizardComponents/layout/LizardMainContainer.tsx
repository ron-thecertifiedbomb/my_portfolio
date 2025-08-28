import React from "react";
import { cn } from "@/lib/utils";

import { LizardAnimatedBackground } from "../LizardAnimatedBackground";
import { useNavigationStore } from "@/store";


interface LizardMainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function LizardMainContainer({ children, className = "" }: LizardMainContainerProps) {
  const { currentScreen } = useNavigationStore();

  const isIntroScreen = currentScreen === "IntroductionScreen";

  return (
    <main
      id="app-main-container"
      className={cn(
        "relative min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto scroll-smooth",
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
