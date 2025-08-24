import React from "react";
import { cn } from "@/lib/utils"; // optional, if you have a classnames helper

interface LizardMainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function LizardMainContainer({
  children,
  className = "",
}: LizardMainContainerProps) {
  return (
    <main
      id="app-main-container"
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto scroll-smooth",
        className
      )}
    >
      {children}
    </main>
  );
}
