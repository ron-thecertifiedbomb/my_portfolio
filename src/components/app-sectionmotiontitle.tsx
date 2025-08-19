// components/app-sectiontitle.tsx

import { Separator } from "@/components/ui/separator";
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
      className={`w-full ${className}`}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <AppLabel variant="h3" className="px-2 sm:px-7">
        {title}
      </AppLabel>

    </AppMotionContent>
  );
}
