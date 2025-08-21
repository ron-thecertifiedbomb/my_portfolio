import { fadeIn } from "@/lib/motion";
import { AppLabel, AppCard } from "@/components/common";
import { AppContentContainer } from "@/components/layout";

export function AppAboutMe() {
  return (
    <AppContentContainer>
      <AppLabel
        variant="h2"
        initial="hidden"
        animate="show"
        variants={fadeIn("up", "tween", 0.3, 1)}
      >
        About Me
      </AppLabel>
      <AppCard description="I’m a passionate React Developer with extensive experience building dynamic, high-performance applications for both web and mobile platforms." />
    </AppContentContainer>
  );
}
