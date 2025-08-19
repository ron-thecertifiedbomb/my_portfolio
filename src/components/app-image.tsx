// app-image.tsx
import React from "react";

interface AppImageProps {
  src: string;
  alt: string;
  className?: string; // optional additional classes
  height?: string; // Tailwind height class, e.g., "h-32", "h-64"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export const AppImage: React.FC<AppImageProps> = ({
  src,
  alt,
  className = "",
  height = "h-64", // default height
  objectFit = "cover",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full ${height} ${className}`}
      style={{ objectFit }}
    />
  );
};
