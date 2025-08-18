import { AppHero } from "@/components/app-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AppAccordion() {
    return (
        <>
            
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Our Specialization</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            At Apache Propeller & Machine Shop, we specialize in crafting high-quality
                            propellers for traditional Filipino bangkas and other marine vessels.
                            Each propeller is precision-engineered for maximum performance, fuel
                            efficiency, and durability in saltwater conditions.
                        </p>
                        <p>
                            In addition to fabrication, we offer complete repair services for marine
                            engines, shafts, and propellers — ensuring your boat stays seaworthy all
                            year round.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Ordering & Delivery</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Orders for custom propellers typically take 3–7 business days to
                            complete, depending on size and specifications. Standard designs are
                            often available for same-day pickup.
                        </p>
                        <p>
                            We provide nationwide delivery via trusted logistics partners. Local
                            customers may also opt for in-shop pickup for faster turnaround.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Warranty & Service Policy</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            All newly fabricated propellers come with a 6-month service warranty
                            covering manufacturing defects. Repairs are guaranteed for 90 days from
                            the date of service.
                        </p>
                        <p>
                            We take pride in our craftsmanship — if there’s ever an issue with your
                            propeller’s performance, bring it in and we’ll make it right.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Contact Information</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            📍 Purok 2, Coastal Road, Barangay San Isidro, Cebu City, Philippines
                        </p>
                        <p>
                            📞 <a href="tel:+639123456789" className="underline underline-offset-4">+63 912 345 6789</a>
                        </p>
                        <p>
                            📧 <a href="mailto:info@apachepropeller.com" className="underline underline-offset-4">info@apachepropeller.com</a>
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        
        </>


    );
}
