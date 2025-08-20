import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { AppImage } from "./AppImage";

export interface AppExploreCardsProps {
  id: string | number;
  imgUrl: string;
  title: string;
  description: string;
  index: number;
  active: string | number | null; // allow null
  handleClick: (id: string | number) => void;
}

export function AppExploreCards({
  id,
  imgUrl,
  title,
  index,
  active,
  description,
  handleClick,
}: AppExploreCardsProps) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`
        relative flex items-center justify-center cursor-pointer
        transition-[flex] duration-[0.7s] ease-out-flex
        min-w-[150px] sm:min-w-[170px] md:min-w-[200px]
        ${
          active === id
            ? "flex-[3.5] lg:flex-[3.5]"
            : "flex-[0.5] lg:flex-[0.5]"
        }
        h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px]
      `}
      onClick={() => handleClick(id)}
    >
      <AppImage
        src={imgUrl}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <h3
          className="absolute z-0 text-white font-semibold text-[14px] sm:text-[18px] lg:text-[26px] 
          lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
        >
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 w-full p-6 sm:p-8 flex flex-col justify-start bg-black/50 rounded-b-[24px]">
          <div className="flex items-center justify-center w-12 h-12 sm:w-15 sm:h-15 rounded-[24px] bg-white/10 mb-4">
            <Code />
          </div>
          <p className="font-normal text-[12px] sm:text-[16px] leading-[16px] sm:leading-[20px] text-white uppercase">
            {description}
          </p>
          <h2 className="mt-4 sm:mt-6 font-semibold text-[20px] sm:text-[32px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}
