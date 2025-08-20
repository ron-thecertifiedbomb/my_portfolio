// app-maincontainer.tsx
import React from "react";
import { cn } from "@/lib/utils";

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
        "flex min-h-screen w-full flex-col items-center justify-center", // full screen
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
