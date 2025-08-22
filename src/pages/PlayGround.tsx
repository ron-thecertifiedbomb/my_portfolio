import { AppLabel } from "@/components/common";
import { AppMainContainer, AppSectionContainer } from "@/components/layout";

export function PlayGround() {
  return (
    <AppMainContainer className="w-screen h-screen flex items-center justify-center">
      <AppSectionContainer className="w-full max-w-[1400px] flex flex-col mx-auto gap-4 mt-24">
        <AppLabel
          variant="h1"
          className="font-extrabold tracking-tight text-balance"
        >
          Taxing Laughter: The Joke Tax Chronicles
        </AppLabel>
        <AppLabel variant="h2">The People of the Kingdom</AppLabel>
        <AppLabel variant="h3">The Joke Tax</AppLabel>
        <AppLabel variant="h4">People stopped telling jokes</AppLabel>
        <AppLabel variant="p" className="leading-7">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </AppLabel>
      </AppSectionContainer>
    </AppMainContainer>
  );
}
