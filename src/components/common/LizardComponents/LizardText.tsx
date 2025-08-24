import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import React from "react";

type LabelVariant = "h1" | "h2" | "h3" | "h4" | "p";

interface LizardTextProps {
  variant?: LabelVariant;
  size?: string; 
  children: React.ReactNode;
  className?: string;
  mode?: MotionProps;
  [key: string]: any;
}

export function LizardText({
  variant = "p",
  size,
  className,
  children,
  mode,
  ...props
}: LizardTextProps) {
  const Component = variant;
  const baseStyles: Record<LabelVariant, string> = {
    h1: "font-extrabold tracking-tight",
    h2: "tracking-tight",
    h3: "font-semibold",
    h4: "font-semibold tracking-tight",
    p: "leading-7",
  };

  const finalClass = cn(size ?? baseStyles[variant], className);

  if (mode) {
    const MotionComponent = motion(Component);
    return (
      <MotionComponent className={finalClass} {...mode} {...props}>
        {children}
      </MotionComponent>
    );
  }

  return (
    <Component className={finalClass} {...props}>
      {children}
    </Component>
  );
}