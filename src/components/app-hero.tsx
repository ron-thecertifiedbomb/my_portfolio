import { useState, useEffect } from "react";
import { AppHeading1, AppParagraph } from "@/components/app-label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AppSocialLinks } from "./app-sociallinks";
import { supabase } from "@/lib/supabase";

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
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <AppHeading1 className="text-3xl md:text-5xl font-bold text-white">
                        Hi, I'm a Full Stack Developer
                    </AppHeading1>
                    <AppParagraph className="text-sm md:text-lg text-white/90">
                        A Full Stack Developer with expertise in React, React Native, and Next.js, building seamless, responsive, and accessible applications across web and mobile platforms.
                        In addition to development, I am a versatile multimedia artist—experienced in video editing, animation, guitar performance, and graphic design—bringing creativity and technical precision to every project.
                    </AppParagraph>

                    <div className="flex">
                        <AppSocialLinks />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Button variant="outline" asChild>
                            <a href="#contact">Contact Me</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="#resume">My Resume</a>
                        </Button>
                    </div>
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
