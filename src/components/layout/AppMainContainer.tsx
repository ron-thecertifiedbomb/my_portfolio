// AppMainContainer.tsx
import React from "react";

interface AppMainContainerProps {
  children: React.ReactNode;
}

export function AppMainContainer({ children }: AppMainContainerProps) {
  return (
    <main
      id="app-main-container"
      className="h-screen w-full overflow-y-auto flex flex-col items-center justify-start scroll-smooth"
    >
      {children}
    </main>
  );
}
