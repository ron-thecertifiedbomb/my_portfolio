import { AppContentContainer } from "../layout/AppContentContainer";
import { AppMarquee } from "../common/AppMarquee";

export function AppMarqueeSection() {
  return (
    <AppContentContainer className="w-full max-w-[1200px] mx-auto mt-2 mb-10">
      <AppMarquee
        iconClassName="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14"
        gap={8} 
        speed={50} 
        scale={1} 
      />
    </AppContentContainer>
  );
}
