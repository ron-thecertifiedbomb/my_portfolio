import { Button } from "@/components/ui/button"

export function AppHero() {
    return (
        <section
            className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center "
            style={{
                backgroundImage: "url('/images/bangka-propeller.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-center text-muted-foreground">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Precision-Crafted Bangka Propellers <br className="hidden md:block" /> & Marine Repairs You Can Trust
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Serving fishermen, boat owners, and marine businesses with expert repairs and high-quality propeller manufacturing.
                </p>

                <div className="mt-8 flex justify-center gap-4 flex-wrap">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700text-muted-foreground">
                        Get a Quote
                    </Button>
                    <Button size="lg" variant="outline" className="text-muted-foreground hover:bg-white hover:text-black">
                        View Services
                    </Button>
                </div>
            </div>
        </section>
    )
}

