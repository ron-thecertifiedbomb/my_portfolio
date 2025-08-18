import { AppHero } from "@/components/app-hero";
import { AppServicesOverview } from "@/components/app-servicesoverview";
import { AppContactSection } from "@/components/app-contentsection";


export default function Dashboard() {
    return (
        <>

            <AppHero />
            <AppServicesOverview />
            <AppContactSection />
        </>


    );
}
