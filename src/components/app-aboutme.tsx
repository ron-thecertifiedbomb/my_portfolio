import { AppCard } from "./app-card";
import { AppContentContainer } from "./app-contentcontainer";

export default function AboutMe() {
  return (
    <AppContentContainer>
      <AppCard
        title="About Me"
        description="I’m a passionate React Developer with extensive experience building dynamic, high performance applications for both web and mobile platforms. I specialize in ReactJS, React Native, Next.js, and Expo, creating robust, scalable, and visually appealing user interfaces. I have a strong background in server-side rendering, API integration, and cross-platform development, delivering seamless experiences across devices."
      />
    </AppContentContainer>
  );
}
