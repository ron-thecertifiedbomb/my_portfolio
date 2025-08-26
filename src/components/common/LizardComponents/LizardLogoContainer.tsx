import React from "react";

interface LizardLogoContainerProps {
    svg: React.FC<React.SVGProps<SVGSVGElement>>; // Pass your SVG here
    className?: string;
}

export function LizardLogoContainer({
    svg: SvgIcon,
    className,
}: LizardLogoContainerProps) {
    return <SvgIcon className={className} width="100%" height="100%" />;
}
