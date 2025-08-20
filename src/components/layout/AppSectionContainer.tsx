import React from "react";
import { cn } from "@/lib/utils";

interface AppSectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  component: React.ReactNode;
  hideScrollbar?: boolean; // hide by default
  noPadding?: boolean; // new prop to remove padding
}

export function AppSectionContainer({
  id,
  component,
  className,
  hideScrollbar = true,
  noPadding = true, // padding removed by default
  ...props
}: AppSectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        noPadding ? "" : "px-4 sm:px-6 md:px-8 lg:px-0",
        "w-full max-w-7xl mx-auto",
        hideScrollbar ? "scrollbar-hide" : "",
        className
      )}
      {...props}
    >
      {component}
    </section>
  );
}
