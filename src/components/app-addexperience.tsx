import React from "react";
import { AppHeading2, AppHeading3, AppParagraph, AppLabel, AppLabelTitle } from "@/components/app-label";

interface MyExperienceProps {
    title?: string; // optional category or title
    role: string;
    company: string;
    type: string; // e.g., Full-time
    period: string; // e.g., Aug 2024 - Feb 2025
    duration: string; // e.g., 7 mos
    location: string; // e.g., Philippines · Remote
    skills: string[]; // e.g., ["React.js", "React Native"]
    description?: string; // optional detailed description
    links?: { label: string; url: string }[]; // optional external links
}

export default function AppAddExperience({
    title,
    role,
    company,
    type,
    period,
    duration,
    location,
    skills,
    description,
    links,
}: MyExperienceProps) {
    return (
        <div className="space-y-3">
            {title && <AppHeading3 className="text-muted-foreground">{title}</AppHeading3>}

            <AppHeading2>{role}</AppHeading2>

            <AppParagraph className="font-medium">
                {company} · {type}
            </AppParagraph>

            <AppParagraph className="text-sm text-muted-foreground">
                {period} · {duration} <br />
                {location}
            </AppParagraph>

            {description && <AppParagraph>{description}</AppParagraph>}

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

            <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill) => (
                    <AppLabel key={skill}>
                        <AppLabelTitle>{skill}</AppLabelTitle>
                    </AppLabel>
                ))}
            </div>
        </div>
    );
}
