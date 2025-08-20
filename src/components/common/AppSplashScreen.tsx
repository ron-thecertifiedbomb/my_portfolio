import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppMainContainer } from "../layout";

interface AppSplashScreenProps {
  logoUrl?: string;
  text?: string;
  className?: string;
}

export function AppSplashScreen({
  logoUrl,
  text = "Loading...",
  className,
}: AppSplashScreenProps) {
  return (
    <AppMainContainer
      className={cn(
        "fixed inset-0 flex items-center justify-center z-50",
        "bg-white dark:bg-black",
        className
      )}
    >
      {/* Container for logo + text */}
      <motion.div className="flex flex-col items-center justify-center gap-4">
        {logoUrl && (
          <motion.img
            src={logoUrl}
            alt="logo"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          />
        )}
        <motion.p
          className="text-black dark:text-white text-lg sm:text-2xl font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {text}
        </motion.p>
      </motion.div>
    </AppMainContainer>
  );
}
