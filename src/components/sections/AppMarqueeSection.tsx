import { AppContentContainer } from "../layout/AppContentContainer";
import { AppMarquee } from "../common/AppMarquee";

export function AppMarqueeSection() {
  return (
    <AppContentContainer className="w-full max-w-[720px] mx-auto mt-5 mb-5">
      <AppMarquee />
    </AppContentContainer>
  );
}
