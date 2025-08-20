import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ScreensaverImage = {
  id: number | string;
  src: string;
  alt?: string;
};

type AppImageScreensaverProps = {
  images: ScreensaverImage[];
  interval?: number; // milliseconds between image changes
  transitionDuration?: number; // fade duration
  className?: string; // wrapper styling
  children?: ReactNode; // centered content
};

export function AppImageScreensaver({
  images,
  interval = 5000,
  transitionDuration = 1.5,
  className = "h-[500px] w-full",
  children,
}: AppImageScreensaverProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <AnimatePresence>
        <motion.img
          key={images[currentIndex].id}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || ""}
          className="absolute top-0 left-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
        />
      </AnimatePresence>

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-center pointer-events-none">
        {children}
      </div>
    </div>
  );
}
