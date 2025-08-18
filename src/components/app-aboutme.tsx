import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    AppHeading1,
    AppParagraph,

} from "@/components/app-label";

export default function AboutMe() {
    return (
        <section id="about" className=" w-full max-w-7xl mx-auto py-9  px-3">
            <div className="flex flex-col gap-4 mb-8 px-3">
                <AppHeading1>About Me</AppHeading1>
                <Separator />
            </div>
            <Card className="shadow-lg border">
                <CardContent className="px-8">
                    <AppParagraph>
                        I’m a passionate React Developer with extensive experience building dynamic, high-performance applications for both web and mobile platforms. I specialize in ReactJS, React Native, Next.js, and Expo, creating robust, scalable, and visually appealing user interfaces. I have a strong background in server-side rendering, API integration, and cross-platform development, delivering seamless experiences across devices.


                    </AppParagraph>

             


                </CardContent>
                <CardContent className="px-8">
           
                    <AppParagraph>
                        I thrive on solving complex problems, optimizing application performance, and implementing cutting-edge solutions that elevate user experiences. My approach combines clean code architecture, modern best practices, and a focus on maintainable, scalable applications. Constantly exploring new technologies, I am dedicated to pushing the limits of what’s possible within the React ecosystem while ensuring efficient, accessible, and engaging digital products.

                    </AppParagraph>


                </CardContent>
            </Card>
        </section>
    );
}
