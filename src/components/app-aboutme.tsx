import { Separator } from "@/components/ui/separator";
import { AppCard } from "./app-card";
import { AppContentContainer } from "./app-contentcontainer";
import { AppLabel } from "./app-label";

export default function AboutMe() {
  return (
    <AppContentContainer className="mt-8">
      <section className="flex flex-col px-3 mb-8 gap-4">
        <AppLabel variant="h2" className="px-7">
          About Me
        </AppLabel>
        <Separator />
      </section>
      <AppCard
        className="px-10"
        description="I’m a passionate React Developer with extensive experience building dynamic, high performance applications for both web and mobile platforms. I specialize in ReactJS, React Native, Next.js, and Expo, creating robust, scalable, and visually appealing user interfaces. I have a strong background in server-side rendering, API integration, and cross-platform development, delivering seamless experiences across devices."
      />
    </AppContentContainer>
  );
}
