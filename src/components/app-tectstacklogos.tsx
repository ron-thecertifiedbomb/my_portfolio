import { techStack } from "@/config/techstack";
import { cn } from "@/lib/utils";
import React from "react";

export const AppTechStackLogos: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            {techStack.map((tech) => (
                <a
                    key={tech.label}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.label}
                    className={cn(
                        "flex items-center justify-center p-1 rounded-full hover:scale-110 transition-transform duration-200"
                    )}
                >
                    {/* Icon with responsive size */}
                    <span className="w-3 h-3 sm:w-3 sm:h-3">
                        {tech.icon}
                    </span>
                </a>
            ))}
        </div>
    );
};
