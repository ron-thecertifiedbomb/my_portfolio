import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AppLabel, AppLabelTitle } from "@/components/app-label";

interface MyExperienceProps {
    title?: string;
    role: string;
    company: string;
    type: string;
    period: string;
    duration: string;
    location: string;
    skills: string[];
    description?: string;
    links?: { label: string; url: string }[];
}

export function MyExperience() {
    const experiences: MyExperienceProps[] = [
        {
            role: "Full Stack Developer (Sub Lead)",
            company: "Ascendion",
            type: "Full-time",
            period: "Aug 2024 - Feb 2025",
            duration: "7 mos",
            location: "Philippines · Remote",
            skills: ["React.js", "React Native", "Next.js", "TypeScript"],
        },
        {
            role: "Full Stack Developer",
            company: "Collabera Digital",
            type: "Full-time",
            period: "Aug 2024 - Feb 2025",
            duration: "7 mos",
            location: "Philippines · Remote",
            skills: ["Expo", "Apigee", "Node.js", "GraphQL", "React Native", "TypeScript"],
        },
        {
            role: "Mid Software Engineer",
            company: "VeritasPay Philippines Inc.",
            type: "Full-time",
            period: "Feb 2023 - Aug 2024",
            duration: "1 yr 7 mos",
            location: "Philippines · Remote",
            skills: ["ReactJS", "React Native", "MobX"],
        },
        {
            role: "Frontend Developer",
            company: "Freelance",
            type: "Freelance",
            period: "Nov 2017 - Sep 2023",
            duration: "5 yrs 11 mos",
            location: "National Capital Region, Philippines",
            skills: ["JavaScript", "HTML", "CSS", "ReactJS", "React Native", "Next.js"],
            description:
                "A Front End Developer specializing in React JS with five years of experience. I develop and maintain UIs for web and mobile applications.",
            links: [
                { label: "Portfolio", url: "https://ronansibunga.vercel.app/#home" },
                { label: "GitHub", url: "https://github.com/ron-thecertifiedbomb" },
            ],
        },
    ];

    return (
        <section className="max-w-7xl mx-auto py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                    <Card key={index} className="border hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle>{exp.role}</CardTitle>
                            <CardDescription className="text-sm text-muted-foreground">
                                {exp.company} · {exp.type} <br />
                                {exp.period} · {exp.duration} <br />
                                {exp.location}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {exp.description && <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>}

                            {exp.links && exp.links.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {exp.links.map((link) => (
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

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                    <AppLabel key={skill}>
                                        <AppLabelTitle>{skill}</AppLabelTitle>
                                    </AppLabel>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
