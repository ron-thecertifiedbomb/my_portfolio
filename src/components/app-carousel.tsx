import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselItemType {
    id: number;
    src: string;
    alt: string;
}

interface AppCarouselProps {
    items: CarouselItemType[];
    renderItem: (item: CarouselItemType) => React.ReactNode;
    maxWidth?: string; // e.g. "max-w-md", "max-w-7xl"
}

export function AppCarousel({ items, renderItem, maxWidth = "max-w-full" }: AppCarouselProps) {
    return (
        <Carousel className={`w-full ${maxWidth}`} opts={{
            align: "start",
            loop: true,
        }}>
            <CarouselContent>
                {items.map((item) => (
                    <CarouselItem key={item.id}>
                    
                                {renderItem(item)}
                       
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
