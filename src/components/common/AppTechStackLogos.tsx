import React, { ReactElement } from "react";
import { techStack } from "@/config/techstack";
import { cn } from "@/lib/utils";

interface AppTechStackLogosProps {
  skills?: string[];
  className?: string; // optional class to apply to icons
}

export function AppTechStackLogos({
  skills,
  className,
}: AppTechStackLogosProps) {
  const filteredStack = skills?.length
    ? techStack.filter((tech) => skills.includes(tech.label))
    : techStack;

  return (
    <div className="flex gap-2 sm:gap-8 justify-center items-center">
      {filteredStack.map((tech) => {
        // Narrow type to ReactElement before cloning
        if (React.isValidElement(tech.icon)) {
          const icon = tech.icon as ReactElement<any>;
          return (
            <a
              key={tech.label}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tech.label}
              title={tech.label}
              className="flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
            >
              {React.cloneElement(icon, {
                className: cn(icon.props.className, className),
              })}
            </a>
          );
        }

        // fallback for non-element icons
        return (
          <a
            key={tech.label}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tech.label}
            title={tech.label}
            className="flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
          >
            {tech.icon}
          </a>
        );
      })}
    </div>
  );
}
