import  { JSX } from "react";

interface Tech {
    label: string;
    icon: JSX.Element | ((props: { className?: string }) => JSX.Element);
    url?: string; // optional, kept for reference but not used
}

interface LizardIconsProps {
    skills?: string[];
    className?: string;
    stack?: Tech[];
}

export function LizardIcons({
    skills,
    className,
    stack = [],
}: LizardIconsProps) {
    const filteredStack = skills?.length
        ? stack.filter((tech) => skills.includes(tech.label))
        : stack;

    return (
        <div className="flex justify-center items-center gap-4">
            {filteredStack.map((tech) => {
                const iconElement =
                    typeof tech.icon === "function"
                        ? tech.icon({ className: className ?? "" })
                        : <div className={className}>{tech.icon}</div>;

                return (
                    <div
                        key={tech.label}
                        className="flex-shrink-0 flex items-center justify-center"
                        title={tech.label}
                        aria-label={tech.label}
                    >
                        {iconElement}
                    </div>
                );
            })}
        </div>
    );
}
