import { cn } from "@/lib/utils";

interface AppContentContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function AppContentContainer({
  children,
  id,
  className,
}: AppContentContainerProps) {
  return (
    <section id={id} className={cn("", className)}>
      {children}
    </section>
  );
}
