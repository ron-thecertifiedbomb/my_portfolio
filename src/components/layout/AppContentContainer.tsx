interface AppContentContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  fitContent?: boolean; // new prop to shrink width to content
}

export function AppContentContainer({
  children,
  id,
  className,
  style,
  fitContent = false,
}: AppContentContainerProps) {
  return (
    <section
      id={id}
      className={`${fitContent ? "inline-block" : "w-full max-w-7xl mx-auto"} ${
        className || ""
      }`}
      style={style}
    >
      {children}
    </section>
  );
}
