import { AppMarqueeIcons } from "@/components/common/AppIconsSection";
import { AppSectionContainer } from "@/components/layout";
import { ReactNode } from "react";

interface Tech {
  label: string;
  icon: ReactNode;
  url?: string;
}
interface AppIconsSection {
  stack: Tech[];
  speed?: number;
  direction?: "left" | "right";
  containerClassName?: string;
  iconClassName?: string;
}

export default function AppIconsSection({ stack }: AppIconsSection) {
  return (
    <AppSectionContainer>
      <AppMarqueeIcons stack={stack} />
    </AppSectionContainer>
  );
}
