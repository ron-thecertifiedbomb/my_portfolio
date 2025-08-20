// components/app-sectiontitle.tsx

import { AppLabel } from "@/components/app-label";
import { AppMotionContent } from "@/components/app-motioncontent";
import { Variants, TargetAndTransition, VariantLabels, Transition } from "framer-motion";

interface AppSectionMotionTitleProps {
  title: string;
  variants?: Variants;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  transition?: Transition;
  className?: string;
}

export function AppSectionMotionTitle({
  title,
  variants,
  initial,
  animate,
  transition,
  className,
}: AppSectionMotionTitleProps) {
  return (
    <AppMotionContent
      className={`w-full p-3 sm:p-5 md:p-5 ${className}`}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <AppLabel variant="h1">{title}</AppLabel>
    </AppMotionContent>
  );
}
