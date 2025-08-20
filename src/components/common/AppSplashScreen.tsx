import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppMainContainer } from "../layout";

interface AppSplashScreenProps {
  logoUrl?: string;
  text?: string;
  className?: string;
  onFinish?: () => void; // callback when animation ends
}

export function AppSplashScreen({
  logoUrl,
  text = "Loading...",
  className,
  onFinish,
}: AppSplashScreenProps) {
  return (
    <AppMainContainer
      className={cn(
        "fixed inset-0 flex items-center justify-center z-50",
        "bg-white dark:bg-black",
        className
      )}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        onAnimationComplete={onFinish}
      >
        {logoUrl && (
          <img
            src={logoUrl}
            alt="logo"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
          />
        )}
        <p className="text-black dark:text-white text-lg sm:text-2xl font-semibold text-center">
          {text}
        </p>
      </motion.div>
    </AppMainContainer>
  );
}
