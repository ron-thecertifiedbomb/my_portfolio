import { AppContentContainer } from "./app-contentcontainer";
import { AppMarquee } from "./app-marquee";

export default function AppMarqueeSection() {
  return (
    <AppContentContainer className="w-full max-w-[720px] mx-auto mt-5 mb-5">
      <AppMarquee />
    </AppContentContainer>
  );
}
