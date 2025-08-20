import { fadeIn } from "@/lib/motion";
import { AppCard}  from "@/components/common";
import {
  AppContentContainer,
  AppSectionMotionTitleContainer,
} from "@/components/layout";


export function AppAboutMe() {
  return (
    <AppContentContainer withPadding={true}>
      <AppSectionMotionTitleContainer
        title="About Me"
        variants={fadeIn("up", "tween", 0.3, 1)}
      />
      <AppCard description="I’m a passionate React Developer with extensive experience building dynamic, high performance applications for both web and mobile platforms." />
    </AppContentContainer>
  );
}
