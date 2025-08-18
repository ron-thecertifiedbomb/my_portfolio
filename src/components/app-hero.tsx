import { AppHeading1, AppParagraph } from "@/components/app-label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AppSocialLinks } from "./app-sociallinks";

export default function AppHero() {
    return (
        <section className="relative py-16 px-2 sm:px-4 md:py-30 md:px-8 overflow-hidden">

            {/* Decorative Circles */}
            {/* <div className="absolute -top-24 -left-24 w-64 h-64 sm:-top-32 sm:-left-32 sm:w-96 sm:h-96 bg-white/20 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 sm:-bottom-32 sm:-right-32 sm:w-96 sm:h-96 bg-white/20 rounded-full opacity-30 animate-pulse"></div> */}

            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 relative z-10">

                {/* Text Content */}
                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <AppHeading1 className="text2xl md:text-5xl font-bold">
                        Hi, I'm Ronan Sibunga
                    </AppHeading1>

                    <AppParagraph className="text-lg md:text-xl text-white/90">
                        A Full Stack Developer specializing in React, React Native, and Next.js. I create seamless, responsive, and accessible applications for web and mobile.
                    </AppParagraph>

                    <div className="flex">
                        <AppSocialLinks />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Button variant="outline" asChild>
                            <a href="#contact">Contact Me</a>
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
                    <div className="relative w-74 h-74 md:w-90 md:h-90 rounded-full  overflow-hidden">
                        <img
                            src="/public/images/me.png"
                            alt="profile"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
