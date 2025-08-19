import { techStack } from "@/config/techstack";
import { cn } from "@/lib/utils";
import React from "react";

interface AppTechStackLogosProps {
    skills?: string[]; // optional array to filter displayed tech
}

export const AppTechStackLogos: React.FC<AppTechStackLogosProps> = ({ skills }) => {
    // filter stack if skills array is provided
    const filteredStack = skills?.length
        ? techStack.filter((tech) => skills.includes(tech.label))
        : techStack;

    return (
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {filteredStack.map((tech) => (
                <a
                    key={tech.label}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.label}
                    title={tech.label} // <-- simple popup on hover
                    className={cn(
                        "flex items-center justify-center p-1 rounded-full hover:scale-110 transition-transform duration-200"
                    )}
                >
                    <span className="w-6 h-6">{tech.icon}</span>
                </a>
            ))}
        </div>
    );
};
