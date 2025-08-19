import React from "react";

interface AppContentContainerProps {
  children: React.ReactNode;
  id?: string; // optional for section linking
  className?: string; // optional custom styles
  style?: React.CSSProperties;
}

export function AppContentContainer({
  children,
  id,
  className,
  style,
}: AppContentContainerProps) {
  return (
    <section
      id={id}
      className={`w-full max-w-7xl mx-auto ${className || ""}`}
      style={style}
    >
      {children}
    </section>
  );
}
