import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  AppHeading4, AppLabel, AppLabelTitle, AppParagraph } from "@/components/app-label";

interface AppCardProps {
    title: string;
    subtitle?: string;
    period?: string;
    location?: string;
    description?: string;
    skills?: string[];
    links?: { label: string; url: string }[];
    className?: string; // optional card class
    style?: React.CSSProperties; // optional inline style
    titleClassName?: string; // optional class for the title
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
    return (
        <Card className={`border hover:shadow-lg transition-shadow duration-300 ${className}`} style={style}>
            <CardHeader>
                <CardTitle>
                    <AppHeading4 className={titleClassName}>{title}</AppHeading4>
                </CardTitle>

                {(subtitle || period || location) && (
                    <div className="flex flex-col gap-1 mt-1">
                        {subtitle && <AppLabel>{subtitle}</AppLabel>}
                        {period && <AppLabel>{period}</AppLabel>}
                        {location && <AppLabel>{location}</AppLabel>}
                    </div>
                )}
            </CardHeader>

            <CardContent className="space-y-3">
                {description && <AppParagraph>{description}</AppParagraph>}

                {links && links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {links.map((link) => (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-sm"
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
