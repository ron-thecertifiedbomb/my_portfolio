import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AppContentContainer } from "../layout/AppContentContainer";
import { AppLogo, AppSidebar } from "@/components/common";
import { ModeToggle } from "../mode-toggle";
import { useFetchLogo } from "@/hooks/fetchLogo";

export function AppHeader() {
  const logoUrl = useFetchLogo("portfolio-assets", "logo.png");
  const [visible, setVisible] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

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
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Transparent header with thicker bottom border */}
      <AppContentContainer className="bg-transparent">
        <header className="w-full flex items-center justify-between h-16 border-b-1 border-white/30 dark:border-neutral-500/30 sm:px-2">
          <AppLogo logoUrl={logoUrl} />
          <section className="flex items-center justify-center">
            <AppSidebar />
            <ModeToggle />
          </section>
        </header>
      </AppContentContainer>
    </motion.div>
  );
}
