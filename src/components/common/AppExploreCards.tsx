import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
// import { Code } from "lucide-react";
import { AppLabel, AppImage } from "@/components/common";

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
      layout // enables smooth flex/width animation
      animate={{
        height:
          window.innerWidth >= 1024
            ? 400 // desktop: keep fixed height
            : active === id
            ? 300 // tablet/mobile active
            : 50, // tablet/mobile inactive
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      className={`relative flex items-center justify-center cursor-pointer w-full md:w-full lg:min-w-[160px] ${
        active === id ? "lg:flex-[4.2]" : "lg:flex-[1]"
      }`}
      onClick={() => handleClick(id)}
    >
      <div className="relative w-full h-full rounded-[17px] overflow-hidden">
        <AppImage
          objectFit="cover"
          src={imgUrl}
          alt={title}
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-[17px]" />
      </div>

      {active !== id ? (
        <h3 className="absolute z-0 text-white font-semibold text-[14px] sm:text-[18px] lg:text-[26px] lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          ""
        </h3>
      ) : (
        <div className="absolute bottom-0 w-full p-4 lg:p-6 flex flex-col justify-start bg-black/75 rounded-b-[12px]">
          <AppLabel variant="h4" className="font-medium -tracking-tight mb-2">
            {title}
          </AppLabel>
          <AppLabel variant="p" className="font-light tracking-wide leading-5">
            {description}
          </AppLabel>
        </div>
      )}
    </motion.div>
  );
}
