interface AppContentContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  fitContent?: boolean; // new prop to shrink width to content
  hideScrollbar?: boolean; // new prop to hide scrollbars
}

export function AppContentContainer({
  children,
  id,
  className,
  style,
  fitContent = false,
  hideScrollbar = false,
}: AppContentContainerProps) {
  return (
    <section
      id={id}
      className={`${fitContent ? "inline-block" : "w-full max-w-7xl mx-auto"} ${
        hideScrollbar ? "scrollbar-hide" : ""
      } ${className || ""}`}
      style={style}
    >
      {children}
    </section>
  );
}
