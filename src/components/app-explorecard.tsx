import { fadeIn } from "@/lib/motion";
import { motion, Variants } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react"; // your icons
export interface AppExploreCardProps {
    id: string | number;
    imgUrl: string;
    title: string;
    index: number;
    active: string | number | null; // <-- allow null
    handleClick: (id: string | number) => void;
}

const AppExploreCard: React.FC<AppExploreCardProps> = ({
    id,
    imgUrl,
    title,
    index,
    active,
    handleClick,
}) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75) as Variants}
            initial="hidden"
            animate="show"
            className={cn(
                "relative flex items-center justify-center min-w-[170px] h-[400px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer",
                active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
            )}
            onClick={() => handleClick(id)}
        >
            <img
                src={imgUrl}
                alt={title}
                className="absolute w-full h-full object-cover rounded-[24px]"
            />

            {active !== id ? (
                <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
                    {title}
                </h3>
            ) : (
                <div className="absolute bottom-0 p-8 flex flex-col justify-start w-full bg-black/50 rounded-b-[24px]">
                    <div className="flex items-center justify-center w-15 h-15 rounded-[24px] bg-white/10 backdrop-blur-md mb-4">
                            <Code/>
                    </div>
                    <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
                        Turning Code into Creativity
                    </p>
                    <h2 className="mt-6 font-semibold sm:text-[32px] text-[24px] text-white">
                        {title}
                    </h2>
                </div>
            )}
        </motion.div>
    );
};

export default AppExploreCard;
