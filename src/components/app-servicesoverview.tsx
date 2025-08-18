import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Cog, Settings, Hammer } from "lucide-react"

const services = [
    {
        title: "Custom Propeller Fabrication",
        description: "Tailor-made bangka propellers designed for maximum efficiency and durability.",
        icon: Hammer,
        link: "#"
    },
    {
        title: "Propeller Repairs",
        description: "Expert repairs to restore damaged or worn propellers back to peak performance.",
        icon: Wrench,
        link: "#"
    },
    {
        title: "Marine Engine Maintenance",
        description: "Regular engine servicing to keep your vessel running smoothly at sea.",
        icon: Cog,
        link: "#"
    },
    {
        title: "Shaft & Bearing Repairs",
        description: "Precision repairs for shafts and bearings to prevent costly breakdowns.",
        icon: Settings,
        link: "#"
    }
]

export function AppServicesOverview() {
    return (
        <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, idx) => {
                        const Icon = service.icon
                        return (
                            <Card key={idx} className="hover:shadow-lg transition-shadow">
                                <CardHeader className="flex items-center space-x-4">
                                    <Icon className="w-8 h-8 text-primary" />
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{service.description}</p>
                                    <a
                                        href={service.link}
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Learn More →
                                    </a>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}