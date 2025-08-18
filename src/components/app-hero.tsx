import { AppHeading1, AppParagraph, AppLabel } from "@/components/app-label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AppHero() {
    return (
        <section className="relative  py-30 px-4 overflow-hidden">

            {/* Decorative Circles */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 rounded-full opacity-30 animate-pulse"></div>

            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 relative z-10">

                {/* Text Content */}
                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <AppHeading1 className="text-4xl md:text-5xl font-bold">
                        Hi, I'm Ronan Sibunga
                    </AppHeading1>

                    <AppParagraph className="text-lg md:text-xl text-white/90">
                        A Full Stack Developer specializing in React, React Native, and Next.js. I create seamless, responsive, and accessible applications for web and mobile.
                    </AppParagraph>

                    <div className="flex flex-wrap gap-3">
                        <AppLabel >ReactJS</AppLabel>
                        <AppLabel >React Native</AppLabel>
                        <AppLabel>Next.js</AppLabel>
                        <AppLabel >TypeScript</AppLabel>
                        <AppLabel >Node.js</AppLabel>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
    
                        <Button variant="outline" asChild>
                            <a href="#contact">Contact Me</a>
                        </Button>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    className="flex-1 flex justify-center md:justify-end"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 bg-white/10 backdrop-blur-sm">
                        <img
                            src="/profile.png"
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
