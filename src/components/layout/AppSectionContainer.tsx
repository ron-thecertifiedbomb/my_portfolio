import { cn } from "@/lib/utils";

interface AppSectionContainerProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

export function AppSectionContainer({
  id,
  children,
  className,
}: AppSectionContainerProps) {
  return (
    <section id={id} className={cn("w-full max-w-7xl mx-auto", className)}>
      {children}
    </section>
  );
}
