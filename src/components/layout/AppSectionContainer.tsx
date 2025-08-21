import { cn } from "@/lib/utils";

interface AppSectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children?: React.ReactNode;
}

export function AppSectionContainer({
  id,
  children,
  className,
  ...props
}: AppSectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", 
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
