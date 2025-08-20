import React from "react";
import { cn } from "@/lib/utils";

interface AppSectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  component: React.ReactNode;
}

export function AppSectionContainer({
  id,
  component,
  className,
  ...props
}: AppSectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        // add horizontal padding only on mobile & tablet
        "px-4 sm:px-6 md:px-8 lg:px-0",
        "w-full max-w-7xl mx-auto",
        className
      )}
      {...props}
    >
      {component}
    </section>
  );
}
