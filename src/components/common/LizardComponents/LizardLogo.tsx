interface LizardLogoProps {
  className?: string; // to control size/color via Tailwind
}

export function LizardLogo({ className }: LizardLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <path d="M10 10 H 90 V 90 H 10 Z" fill="currentColor" />
      {/* paste all other paths/shapes from your SVG here, replace fill="#000" with fill="currentColor" */}
    </svg>
  );
}
