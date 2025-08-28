export { LizardSection } from "../LizardComponents/layout/LizardSection";
export { LizardMainContainer } from "../LizardComponents/layout/LizardMainContainer";
export { LizardContent } from "../LizardComponents/layout/LizardContent";

export { SkillsScreen } from "./screens/SkillsScreen";
export { IntroductionScreen } from "./screens/IntroductionScreen";
export { ProjectScreen } from "./screens/ProjectScreen";
export { AboutMeScreen } from "./screens/AboutMeScreen";

export { LizardCard } from "./LizardCard";
export { LizardHeader } from "./LizardHeader";
export { LizardText } from "./LizardText";
export { LizardCenterCard } from "./LizardCenterCard";
export { LizardImage } from "./LizardImage";
export { LizardCardGrid } from "./LizardCardGrid";
export { LizardDateAndTime } from "./LizardDateAndTime";
export { LizardInteractivePanel } from "./LizardInteractivePanel";
export { LizardInteractiveNavigationControlSection } from "./LizardInteractiveNavigationControlSection";
export { LizardIcons } from "./LizardIcons";
export { LizardLocator } from "./LizardLocator";
export { LizardCoordinates } from "./LizardCoordinates";
export { LizardProfileCard } from "./LizardProfileCard";
export { LizardCardHeader } from "./LizardCardHeader";
export { LizardCardBorder } from "./LizardCardBorder";
export { LizardCardStyle } from "./LizardCardStyle";
export { LizardAnimatedBackground } from "./LizardAnimatedBackground";




import LizardLogoAndTitle from "@/components/assets/lizardandtext.svg";
import LizardLogoSVG from "@/components/assets/lizardicon.svg";
import CoverSVG from "@/components/assets/cover.svg";

export const LizardAndTitleLogo = LizardLogoAndTitle as unknown as React.FC<
  React.SVGProps<SVGSVGElement>
>;

export const LizardLogo = LizardLogoSVG as unknown as React.FC<
  React.SVGProps<SVGSVGElement>
>;
export const Cover = CoverSVG as unknown as React.FC<
  React.SVGProps<SVGSVGElement>
>;