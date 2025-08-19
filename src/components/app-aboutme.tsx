import { fadeIn } from "@/lib/motion";
import { AppCard } from "./app-card";
import { AppContentContainer } from "./app-contentcontainer";
import { AppSectionMotionTitle } from "./app-sectionmotiontitle";

export default function AboutMe() {
  return (
    <AppContentContainer className="mt-8">
      <AppSectionMotionTitle
        title="About Me"
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="mb-6"
      />
      <AppCard
        className="px-4 sm:px-10"
        description="I’m a passionate React Developer with extensive experience building dynamic, high performance applications for both web and mobile platforms. I specialize in ReactJS, React Native, Next.js, and Expo, creating robust, scalable, and visually appealing user interfaces. I have a strong background in server-side rendering, API integration, and cross-platform development, delivering seamless experiences across devices."
      />
    </AppContentContainer>
  );
}
