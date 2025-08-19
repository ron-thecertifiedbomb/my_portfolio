// app-motioncontent.tsx


// app-motioncontent.tsx


import { ReactNode, CSSProperties } from "react";
import { motion, TargetAndTransition, VariantLabels, Transition, Variants } from "framer-motion";

interface AppMotionContentProps {
  children: ReactNode;
  className?: string;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  transition?: Transition;
  style?: CSSProperties;
  variants?: Variants; // added support for variants
  custom?: number; // for variant functions that take a parameter
}

export function AppMotionContent({
  children,
  className = "",
  initial = { opacity: 0, y: 40 },
  animate = { opacity: 1, y: 0 },
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
      custom={custom} // allows passing a number to variants functions
      style={style}
    >
      {children}
    </motion.section>
  );
}
