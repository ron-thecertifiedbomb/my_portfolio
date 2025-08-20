import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppContentContainer } from "./app-contentcontainer";
import { AppLabel } from "./app-label";

export type TransitioningTextItem = {
  id: number | string;
  title?: ReactNode;
  description?: ReactNode;
};

export type AppTransitioningTextProps = {
  items: TransitioningTextItem[];
  interval?: number;
  transitionDuration?: number;
  className?: string;
};

export function AppTransitioningText({
  items,
  interval = 5000,
  transitionDuration = 1.5,
  className = "",
}: AppTransitioningTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <AppContentContainer
      className={`
    relative
    inline-block
    p-10
    rounded-3xl
    bg-white/5 dark:bg-black/5
    shadow-2xl shadow-black/60
    text-center
    ${className}
  `}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={items[currentIndex].id}
          className="flex flex-col items-center justify-center relative z-10"
          initial={false} // 👈 prevents fade-in
          animate={{ opacity: 1 }} // 👈 forces constant visibility
          exit={{ opacity: 1 }} // 👈 no fade on exit
          transition={{ duration: transitionDuration }}
        >
          {items[currentIndex].title && (
            <AppLabel
              variant="h1"
              className="
  
    leading-tight
    text-transparent bg-clip-text bg-gradient-to-r
    from-gray-900 via-gray-600 to-gray-400
    dark:from-white dark:via-gray-300 dark:to-gray-500
    font-extrabold tracking-tight drop-shadow-lg
  "
            >
              {items[currentIndex].title}
            </AppLabel>
          )}
          {items[currentIndex].description && (
            <AppLabel
              variant="p"
              className="text-gray-900/80 dark:text-gray-100/80 font-medium drop-shadow-md"
            >
              {items[currentIndex].description}
            </AppLabel>
          )}
        </motion.div>
      </AnimatePresence>
    </AppContentContainer>
  );
}
