import React from "react";
import { cn } from "@/lib/utils";

interface AppMainContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hideScrollbar?: boolean; // new prop to hide scrollbars
}

export function AppMainContainer({
  children,
  className,
  hideScrollbar = false,
  ...props
}: AppMainContainerProps) {
  return (
    <main
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center",
        hideScrollbar ? "scrollbar-hide" : "",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
