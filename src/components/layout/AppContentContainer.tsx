interface AppContentContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  fitContent?: boolean; // shrink width to content
  hideScrollbar?: boolean; // hide scrollbars
  withPadding?: boolean; // apply horizontal padding
}

export function AppContentContainer({
  children,
  id,
  className,
  style,
  fitContent = false,
  hideScrollbar = false,
  withPadding = false, // false by default
}: AppContentContainerProps) {
  return (
    <section
      id={id}
      className={`${fitContent ? "inline-block" : "w-full max-w-7xl mx-auto"} ${
        withPadding && !fitContent ? "px-4 sm:px-6 md:px-8 lg:px-0" : ""
      } ${hideScrollbar ? "scrollbar-hide" : ""} ${className || ""}`}
      style={style}
    >
      {children}
    </section>
  );
}
