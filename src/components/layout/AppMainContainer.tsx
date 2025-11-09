import React from "react";
import { cn } from "@/lib/utils";
import { AppSectionContainer } from "@/components/layout/";

interface AppMainContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function AppMainContainer({
  children,
  className,
  ...props
}: AppMainContainerProps) {
  return (
    <main
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-start",
        className
      )}
      {...props}
    >
      <AppSectionContainer>{children}</AppSectionContainer>
    </main>
  );
}
