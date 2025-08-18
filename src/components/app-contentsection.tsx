import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import AppMapEmbed from "./app-map";

export function AppContactSection() {
    return (
        <section className="bg-muted/20 py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Map */}
                <div className="flex flex-col h-full min-h-[500px]">
                    <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                    <div className="flex-1">
                        <AppMapEmbed />
                    </div>
                </div>

                {/* Contact Form & Info */}
                <div className="flex flex-col h-full min-h-[500px]">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <Card className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <form
                            action="https://formspree.io/f/YOUR_FORM_ID"
                            method="POST"
                            className="space-y-4"
                        >
                            <Input name="name" placeholder="Your Name" required />
                            <Input name="email" type="email" placeholder="Your Email" required />
                            <Textarea name="message" placeholder="Your Message" rows={4} required />
                            <Button type="submit">Send Message</Button>
                        </form>

                        <div className="pt-4 border-t border-muted-foreground/50 space-y-2">
                            <p className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5" />
                                <span>4QM6+RRX, Legazpi City, Albay</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <Phone className="w-5 h-5" />
                                <a href="tel:+639123456789" className="hover:underline">+63 912 345 6789</a>
                            </p>
                            <p className="flex items-center space-x-2">
                                <MessageCircle className="w-5 h-5" />
                                <a href="https://m.me/YourPageID" target="_blank" rel="noreferrer" className="hover:underline">Messenger Chat</a>
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}

