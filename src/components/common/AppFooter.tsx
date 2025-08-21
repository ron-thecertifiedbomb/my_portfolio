import { AppContentContainer } from "@/components/layout";
import { AppLabel } from "@/components/common";
export function AppFooter() {
  return (
    <AppContentContainer>
      <footer className="w-full py-6 flex flex-col items-center gap-5">
        <AppLabel variant="p" className="font-semibold tracking-tight">
          © {new Date().getFullYear()} Ronan Ramos Sibunga{" "}
        </AppLabel>
      </footer>
    </AppContentContainer>
  );
}
