import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AppLabel, AppLabelTitle } from "@/components/app-label";

interface AppCardProps {
    title: string;
    subtitle?: string;
    period?: string;
    location?: string;
    description?: string;
    skills?: string[];
    links?: { label: string; url: string }[];
}

export function AppCard({
    title,
    subtitle,
    period,
    location,
    description,
    skills,
    links,
}: AppCardProps) {
    return (
        <Card className="border hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {(subtitle || period || location) && (
                    <CardDescription className="text-sm text-muted-foreground">
                        {subtitle && <>{subtitle} <br /></>}
                        {period && <>{period} <br /></>}
                        {location && <>{location}</>}
                    </CardDescription>
                )}
            </CardHeader>

            <CardContent className="space-y-3">
                {description && <p className="text-gray-700 dark:text-gray-300">{description}</p>}

                {links && links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {links.map((link) => (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 underline text-sm"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}

                {skills && skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <AppLabel key={skill}>
                                <AppLabelTitle>{skill}</AppLabelTitle>
                            </AppLabel>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
