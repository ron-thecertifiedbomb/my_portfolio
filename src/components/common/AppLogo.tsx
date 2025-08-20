import { AppContentContainer } from "../layout/AppContentContainer";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AppLogoProps {
  logoUrl: string | null;
  className?: string; // optional custom class
}

export function AppLogo({ logoUrl, className }: AppLogoProps) {
  return (
    <AppContentContainer className={cn("flex items-center gap-2", className)}>
      <Link to="/">
        <Avatar className="w-9 h-9 sm:w-10 sm:h-10">
          <AvatarImage
            src={logoUrl ?? ""}
            alt="logo"
            className="w-full h-full object-contain"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </Link>
    </AppContentContainer>
  );
}
