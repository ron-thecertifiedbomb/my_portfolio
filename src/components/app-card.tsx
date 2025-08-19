import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppLabel } from "@/components/app-label";
import { AppTechStackLogos } from "./app-techstacklogos";
import { AppContentContainer } from "./app-contentcontainer";

interface AppCardProps {
  title?: string;
  subtitle?: string;
  period?: string;
  location?: string;
  description?: string;
  skills?: string[];
  links?: { label: string; url: string }[];
  className?: string;
  style?: React.CSSProperties;
  titleClassName?: string;
}

export function AppCard({
  title,
  subtitle,
  period,
  location,
  description,
  skills,
  links,
  className,
  style,
  titleClassName,
}: AppCardProps) {
  // check if header content exists
  const hasHeader = title || subtitle || period || location;

  return (
    <Card
      className={`w-full shadow-md rounded-xl ${className || ""}`}
      style={style}
    >
      {/* Header (render only if something exists) */}
      {hasHeader && (
        <CardHeader className="p-0 mb-2">
          {title && (
            <CardTitle>
              <AppLabel
                variant="h3"
                className={`text-xl font-bold ${titleClassName || ""}`}
              >
                {title}
              </AppLabel>
            </CardTitle>
          )}

          <AppContentContainer className="flex flex-col gap-1 text-sm">
            {subtitle && (
              <AppLabel variant="h4" className="font-medium">
                {subtitle}
              </AppLabel>
            )}
            {period && (
              <AppLabel variant="p" className="font-medium">
                {period}
              </AppLabel>
            )}
            {location && (
              <AppLabel variant="p"  className="font-light leading-7">
                {location}
              </AppLabel>
            )}
          </AppContentContainer>
        </CardHeader>
      )}

      {/* Content */}
      <CardContent className="p-0 space-y-4">
        {/* Description */}
        {description && <AppLabel variant="p">{description}</AppLabel>}

        {/* Links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <AppContentContainer className="bg-stone-950 dark:bg-transparent p-1 rounded-lg">
            <section className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <AppTechStackLogos key={skill} skills={[skill]} />
              ))}
            </section>
          </AppContentContainer>
        )}
      </CardContent>
    </Card>
  );
}
