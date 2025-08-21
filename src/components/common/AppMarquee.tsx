import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AppTechStackLogos } from "./AppTechStackLogos";

interface AppMarqueeProps {
  className?: string;
  iconClassName?: string;
  speed?: number;
  scale?: number;
  gap?: number; // spacing in px
}

export function AppMarquee({
  className,
  iconClassName = "w-14 h-14",
  speed = 50,
  scale = 1,
  gap = 16,
}: AppMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Measure content width
  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2); // one repetition
    }
  }, []);

  const gapStyle = { gap: `${gap}px` };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        ref={containerRef}
        className="flex flex-nowrap items-center"
        style={{ ...gapStyle }}
        animate={{ x: [-0, -contentWidth] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: contentWidth ? contentWidth / speed : 0,
        }}
      >
        {/* Duplicate for seamless loop */}
        <div
          className="flex flex-nowrap items-center"
          style={{
            ...gapStyle,
            transform: `scale(${scale})`,
            minWidth: "fit-content",
          }}
        >
          <AppTechStackLogos className={iconClassName} />
        </div>
        <div
          className="flex flex-nowrap items-center"
          style={{
            ...gapStyle,
            transform: `scale(${scale})`,
            minWidth: "fit-content",
          }}
        >
          <AppTechStackLogos className={iconClassName} />
        </div>
      </motion.div>
    </div>
  );
}
