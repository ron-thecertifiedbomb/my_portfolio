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
      className={`
    relative flex items-center justify-center cursor-pointer
    transition-[flex] duration-[0.3s] ease-out
    w-full md:w-full lg:min-w-[160px]
    ${
      active === id
        ? "h-[250px] md:h-[300px] lg:h-[400px] lg:flex-[4.2]" /* active card taller on mobile/tablet, wider on desktop */
        : "h-[30px] md:h-[50px] lg:h-[400px] lg:flex-[1]" /* inactive card shorter on mobile/tablet, narrower on desktop */
    }
  `}
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
