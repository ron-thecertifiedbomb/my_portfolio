import { motion } from "framer-motion";
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
  const gapStyle = { gap: `${gap}px` };

  // We render icons twice to create an infinite loop
  const logos = [
    <AppTechStackLogos className={iconClassName} />,
    <AppTechStackLogos className={iconClassName} />,
  ];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex flex-nowrap items-center"
        style={{ ...gapStyle }}
        animate={{ x: ["0px", "-50%"] }} // slide by half of the total width
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40 * (50 / speed),
        }}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex flex-nowrap items-center"
            style={{
              ...gapStyle,
              transform: `scale(${scale})`,
              minWidth: "fit-content",
            }}
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
