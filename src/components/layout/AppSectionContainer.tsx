import React from "react";
import { cn } from "@/lib/utils";

interface AppSectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  component: React.ReactNode;
  className?: string;
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
      className={cn("w-full max-w-7xl mx-auto", className)}
      {...props}
    >
      {component}
    </section>
  );
}
