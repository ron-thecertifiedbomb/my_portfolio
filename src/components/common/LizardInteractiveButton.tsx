import { AppImage } from "@/components/common";
import { Button } from "@/components/ui/button";

interface LizardInteractiveButtonProps {
  onClick?: () => void;
  src: string;
  alt: string;
  className?: string; // extra Tailwind classes for the image
}

export function LizardInteractiveButton({
  onClick,
  src,
  alt,
  className = "",
}: LizardInteractiveButtonProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="
        rounded-full
        flex items-center justify-center
        p-4
        w-18 h-18 sm:w-20 sm:h-20 lg:w-22lg:h-22
        transition-transform duration-200
        overflow-hidden
      "
    >
      <AppImage
        src={src}
        alt={alt}
        objectFit="contain"
        className={`w-18 sm:w-16 lg:w-20 h-auto block mx-auto ${className}`}
      />
    </Button>
  );
}
