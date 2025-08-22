import React from "react";

interface Tech {
  label: string;
  icon: React.ReactNode;
  url?: string;
}

interface AppTechStackLogosProps {
  skills?: string[];
  className?: string;
  stack?: Tech[];
}

export function AppTechStackLogos({
  skills,
  className,
  stack = [],
}: AppTechStackLogosProps) {
  const filteredStack = skills?.length
    ? stack.filter((tech) => skills.includes(tech.label))
    : stack;

  return (
    <div className="flex justify-center items-center gap-4">
      {filteredStack.map((tech) => (
        <a
          key={tech.label}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tech.label}
          title={tech.label}
          className={`flex-shrink-0 flex items-center justify-center ${
            className ?? ""
          }`}
        >
          {React.isValidElement(tech.icon)
            ? React.cloneElement(
                tech.icon as React.ReactElement<any>, // <--- use any here
                {
                  className: `${
                    (tech.icon as React.ReactElement<any>).props.className ?? ""
                  }`,
                }
              )
            : tech.icon}
        </a>
      ))}
    </div>
  );
}
