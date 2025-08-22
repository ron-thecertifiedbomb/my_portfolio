import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

type LabelVariant = "h1" | "h2" | "h3" | "h4" | "p";

type MotionElementProps = MotionProps & React.ComponentPropsWithoutRef<"p">;

interface AppLabelProps extends MotionElementProps {
  variant?: LabelVariant;
  children: React.ReactNode;
  className?: string;
}

export function AppLabel({
  variant = "p",
  className,
  children,
  ...props
}: AppLabelProps) {
  const Component =
    variant === "h1"
      ? "h1"
      : variant === "h2"
      ? "h2"
      : variant === "h3"
      ? "h3"
      : variant === "h4"
      ? "h4"
      : "p";

  const baseStyles: Record<LabelVariant, string> = {
    h1: "text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance",
    h2: "text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-tight",
    h3: "text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold",
    h4: "text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight",
    p: "text-sm sm:text-base md:text-m leading-7",
  };

  const motionKeys = [
    "initial",
    "animate",
    "variants",
    "transition",
    "whileHover",
    "whileTap",
  ];

  const MotionComponent = Object.keys(props).some((key) =>
    motionKeys.includes(key)
  )
    ? motion(Component)
    : Component;

  return (
    <MotionComponent className={cn(baseStyles[variant], className)} {...props}>
      {children}
    </MotionComponent>
  );
}
