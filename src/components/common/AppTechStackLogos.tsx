import { techStack } from "@/config/techstack";
import { cn } from "@/lib/utils";

interface AppTechStackLogosProps {
  skills?: string[]; // optional array to filter displayed tech
}

export function AppTechStackLogos({ skills }: AppTechStackLogosProps) {
  // filter stack if skills array is provided
  const filteredStack = skills?.length
    ? techStack.filter((tech) => skills.includes(tech.label))
    : techStack;

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {filteredStack.map((tech) => (
        <a
          key={tech.label}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tech.label}
          title={tech.label}
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full bg-transparent text-white transition-transform duration-200 hover:scale-110"
          )}
        >
          <span className="w-6 h-6">{tech.icon}</span>
        </a>
      ))}
    </div>
  );
}
