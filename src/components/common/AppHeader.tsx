import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AppContentContainer } from "../layout/AppContentContainer";
import { AppLogo, AppSidebar } from "@/components/common";
import { useFetchLogo } from "@/hooks/fetchLogo";

export function AppHeader() {
  const logoUrl = useFetchLogo("portfolio-assets", "logoRound.png");
  const fallbackLogo = "/avatars/logoRound.png"; // public folder fallback
  const [finalLogo, setFinalLogo] = useState<string>(fallbackLogo);

  const [visible, setVisible] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Pick supabase logo if available, else fallback
  useEffect(() => {
    if (logoUrl) {
      setFinalLogo(logoUrl);
    }
  }, [logoUrl]);

  // Slide down on first load
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Hide on scroll, show after stop
  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setVisible(true), 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center"
    >
      <AppContentContainer className="w-full max-w-7xl">
        <motion.header
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{
            backgroundColor: visible
              ? "rgba(0,0,0,0.4)" // darker glass
              : "rgba(0,0,0,0)", // fully transparent
          }}
          className="rounded-b-lg flex items-center justify-between h-16 border-b-2 border-white/30 dark:border-neutral-500/30 pl-2 pr-2"
        >
          <AppLogo logoUrl={finalLogo} />
          <section className="flex items-center justify-center">
            <AppSidebar />
          </section>
        </motion.header>
      </AppContentContainer>
    </motion.div>
  );
}
