import { cn } from "@/lib/utils";
import { AppImage } from "@/components/common";
import { Link } from "react-router-dom";

interface AppLogoProps {
  logoUrl: string | null;
  className?: string;
}

export function AppLogo({ logoUrl, className }: AppLogoProps) {


  
  return (
    <div className={cn("flex items-center", className)}>
      <Link to="/" className="inline-flex">
        {logoUrl ? (
          <AppImage
            src={logoUrl}
            alt="logo"
            className="max-h-8 w-auto object-contain"
          />
        ) : (
          <span className="text-lg font-bold">RS</span> // fallback text
        )}
      </Link>
    </div>
  );
}
