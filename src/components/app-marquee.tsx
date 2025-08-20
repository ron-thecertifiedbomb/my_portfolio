

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppTechStackLogos } from "./app-techstacklogos";

interface AppMarqueeProps {
  className?: string;
  speed?: number;
  scale?: number; 
  gap?: string; 
}

export function AppMarquee({
  className,
  speed = 50,
  scale = 1,
  gap = "gap-4",
}: AppMarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className={cn("flex flex-nowrap items-center", gap)}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40 * (50 / speed),
        }}
      >
        {/* Duplicate for seamless loop */}
        <div
          className={cn("flex flex-nowrap items-center", gap)}
          style={{ transform: `scale(${scale})`, minWidth: "fit-content" }}
        >
          <AppTechStackLogos />
        </div>
        <div
          className={cn("flex flex-nowrap items-center", gap)}
          style={{ transform: `scale(${scale})`, minWidth: "fit-content" }}
        >
          <AppTechStackLogos />
        </div>
      </motion.div>
    </div>
  );
}
