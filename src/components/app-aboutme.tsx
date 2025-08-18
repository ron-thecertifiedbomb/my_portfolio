import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    AppHeading1,
    AppParagraph,

} from "@/components/app-label";

export default function AboutMe() {
    return (
        <section id="about" className=" w-full max-w-7xl mx-auto py-16 ">
            <div className="flex flex-col gap-4 mb-8">
                <AppHeading1>About Me</AppHeading1>
                <Separator />
            </div>
            <Card className="shadow-lg">
                <CardContent className="space-y-6">
                    <AppParagraph>
                        I'm a passionate React Developer specializing in building dynamic, high-performance applications across web and mobile platforms. With 5 years of experience in ReactJS and React Native, I excel at crafting robust user interfaces with ReactJS, leveraging Next.js for server-side rendering and API development, and delivering seamless cross-platform experiences with React Native and Expo. I thrive on tackling complex challenges, optimizing performance, and pushing the boundaries of what’s possible within the React ecosystem.
                    </AppParagraph>
                    <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                            const projectsSection = document.getElementById("projects");
                            projectsSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        See My Work
                    </Button>

                </CardContent>
            </Card>
        </section>
    );
}
