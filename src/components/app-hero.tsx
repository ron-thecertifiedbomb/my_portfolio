import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppSocialLinks } from "./app-sociallinks";
import { supabase } from "@/lib/supabase";
import { AppLabel } from "./app-label";


export default function AppHero() {

    const [bgUrl, setBgUrl] = useState("");
    const [profileUrl, setProfileUrl] = useState("");

    useEffect(() => {
        // Get background URL
        const { data: bgData } = supabase
            .storage
            .from("portfolio-assets")
            .getPublicUrl("bg.jpg");
        setBgUrl(bgData.publicUrl);

        // Get profile image URL
        const { data: profileData } = supabase
            .storage
            .from("portfolio-assets")
            .getPublicUrl("me.png");
        setProfileUrl(profileData.publicUrl);
    }, []);

    return (
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[3px]"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 px-2 sm:px-4 md:px-8 py-16 md:py-30 z-10">
          {/* Text Content */}
          <motion.div
            className="flex-1 space-y-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <section className="bg-white/40 dark:bg-background/30 hover:shadow-lg transition-shadow duration-300 border-0 p-4 rounded-2xl mb-3">
              <AppLabel variant="h3">
                Hey, I’m Ronan Sibunga.
              </AppLabel>
              <AppLabel variant="p">
                Full Stack Developer & Creative Explorer. I craft sleek,
                responsive apps with React, React Native, and Next.js—and when
                I’m not coding, I’m jamming on guitar, animating, editing
                videos, or designing visuals. Tech meets creativity, and magic
                happens.
              </AppLabel>
            </section>

            <div className="flex">
              <AppSocialLinks />
            </div>
            {/* 
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Button variant="outline" asChild>
                            <a href="#contact">Contact Me</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="#resume">My Resume</a>
                        </Button>
                    </div> */}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end pr-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              {profileUrl && (
                <img
                  src={profileUrl}
                  alt="profile"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
}
