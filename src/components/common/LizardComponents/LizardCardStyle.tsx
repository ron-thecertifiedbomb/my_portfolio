// components/common/LizardCardStyle.tsx
import { LizardLogo } from "@/components/common";
import { LizardCardBorder, LizardText } from "@/components/common/LizardComponents";

interface LizardCardItem {
    label: string;
    value: string;
    valueClassName?: string;
}

interface LizardCardStyleProps {
    logoClassName?: string;
    items: LizardCardItem[];
}

export function LizardCardStyle({ logoClassName, items }: LizardCardStyleProps) {
    return (
        <div className="flex flex-col max-w-[170px] w-full">
            <LizardCardBorder className="mb-8 p-4">
                <LizardLogo className={logoClassName || "fill-white"} />
            </LizardCardBorder>

            {items.map((item, index) => (
                <div key={index} className="mb-3">
                    <LizardText
                        variant="h1"
                        className="text-[16px] uppercase text-[#b3b3b3] w-full mb-1"
                    >
                        {item.label}
                    </LizardText>
                    <LizardText
                        variant="p"
                        className={`text-[16px] uppercase text-[#E84A4A] w-full leading-none ${item.valueClassName || "mb-1"}`}
                    >
                        {item.value}
                    </LizardText>
                </div>
            ))}
        </div>
    );
}
