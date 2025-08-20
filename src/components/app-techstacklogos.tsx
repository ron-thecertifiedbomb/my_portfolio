import { techStack } from "@/config/techstack";
import { cn } from "@/lib/utils";

interface AppTechStackLogosProps {
  skills?: string[];
}

export const AppTechStackLogos = ({ skills }: AppTechStackLogosProps) => {
  const filteredStack = skills?.length
    ? techStack.filter((tech) => skills.includes(tech.label))
    : techStack;

  return (
    <div className="flex gap-4 justify-center">
      {filteredStack.map((tech) => (
        <a
          key={tech.label}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tech.label}
          title={tech.label}
          className={cn(
            "flex items-center justify-center w-7 h-7 rounded-full bg-transparent text-white shadow-md hover:scale-110 transition-transform duration-200 overflow-hidden"
          )}
        >
          <span className="flex items-center justify-center w-full h-full">
            {tech.icon}
          </span>
        </a>
      ))}
    </div>
  );
};
