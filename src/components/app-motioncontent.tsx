// src/components/app-motioncontent.tsx
import { ReactNode, CSSProperties } from "react";
import {
  motion,
  TargetAndTransition,
  VariantLabels,
  Transition,
  Variants,
} from "framer-motion";

interface AppMotionContentProps {
  children: ReactNode;
  className?: string;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  transition?: Transition;
  style?: CSSProperties;
  variants?: Variants;
  custom?: number;
}

export function AppMotionContent({
  children,
  className = "",
  initial = { opacity: 0, scale: 0.95 }, // 🔹 subtle zoom + fade
  animate = { opacity: 1, scale: 1 }, // 🔹 zoom to normal
  transition = { duration: 0.8, ease: "easeOut" },
  style,
  variants,
  custom,
}: AppMotionContentProps) {
  return (
    <motion.section
      className={`w-full ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
      variants={variants}
      custom={custom}
      style={style}
    >
      {children}
    </motion.section>
  );
}
