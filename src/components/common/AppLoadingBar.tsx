import { motion } from "framer-motion";
import { AppImage, AppLabel } from "@/components/common";
import { AppMainContainer } from "@/components/layout";

interface AppLoadingBarProps {
  logoUrl?: string;
  text?: string;
  onFinish?: () => void;
  duration?: number;
}

export function AppLoadingBar({
  logoUrl,
  text = "Loading...",
  onFinish,
  duration = 2, 
}: AppLoadingBarProps) {
  return (
    <AppMainContainer>
      <motion.div
        className="h-screen w-screen flex flex-col items-center justify-center gap-1"
        initial={{ opacity: 0 }} // start invisible
        animate={{ opacity: 1 }} // fade in
        transition={{ duration: 0.8 }} // fade duration
      >
        {/* Logo */}
        {logoUrl && (
          <motion.div
            style={{ perspective: 1000 }}
            animate={{ rotateY: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: duration,
              ease: "linear",
            }}
            transform-origin="50% 50%"
          >
            <AppImage
              src={logoUrl}
              alt="logo"
              className="w-8 max-w-[40vw] sm:w-12 sm:max-w-[25vw] lg:w-18 lg:max-w-[30vw] h-auto object-contain"
            />
          </motion.div>
        )}

        {/* Text */}
        <AppLabel variant="p">{text}</AppLabel>

        {/* ShadCN-style progress bar */}
        <div className="w-15 sm:w-30 lg:w-30 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-600 via-green-500 to-green-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration, ease: "linear" }}
            onAnimationComplete={onFinish}
          />
        </div>
      </motion.div>
    </AppMainContainer>
  );
}
