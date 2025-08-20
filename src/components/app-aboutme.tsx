import { fadeIn } from "@/lib/motion";
import { AppCard } from "./app-card";
import { AppContentContainer } from "./app-contentcontainer";
import { AppSectionMotionTitle } from "./app-sectionmotiontitle";

export default function AboutMe() {
  return (
    <AppContentContainer>
      <AppSectionMotionTitle
        title="About Me"
        variants={fadeIn("up", "tween", 0.3, 1)}
      
      />
      <AppCard
        description="I’m a passionate React Developer with extensive experience building dynamic, high performance applications for both web and mobile platforms."
      />
    </AppContentContainer>
  );
}
