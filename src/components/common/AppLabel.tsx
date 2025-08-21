import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

type LabelVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "label"
  | "title"
  | "description";

type MotionElementProps = MotionProps & React.ComponentPropsWithoutRef<"p">;

interface AppLabelProps extends MotionElementProps {
  variant?: LabelVariant;
  children: ReactNode;
}
export function AppLabel({
  variant = "p",
  className,
  children,
  ...props
}: AppLabelProps) {
  const Component =
    variant === "p" ||
    variant === "label" ||
    variant === "title" ||
    variant === "description"
      ? "p"
      : variant;

  const baseStyles: Record<LabelVariant, string> = {
    h1: "text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
    h2: "text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold",
    h3: "text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold",
    h4: "text-sm sm:text-lg md:text-xl lg:text-2xl font-medium",
    p: "text-sm sm:text-base md:text-m leading-relaxed",
    label: "text-sm sm:text-sm md:text-base lg:text-base",
    title: "font-semibold text-xs sm:text-sm md:text-base",
    description: "text-xs sm:text-sm md:text-base lg:text-base",
  };

  // Use motion if motion props are provided
  const MotionComponent: any = Object.keys(props).some(key =>
    ["initial", "animate", "variants", "transition", "whileHover", "whileTap"].includes(key)
  )
    ? motion(Component)
    : Component;

  return (
    <MotionComponent className={cn(baseStyles[variant], className)} {...props}>
      {children}
    </MotionComponent>
  );
}
