import { AppCarousel } from "./app-carousel";

export function AppGallery() {
    const images = [
        { id: 1, src: "/assets/bg.jpg", alt: "Background 1" },
        { id: 2, src: "/assets/bg.jpg", alt: "Background 2" },
        { id: 3, src: "/assets/bg.jpg", alt: "Background 3" },
        { id: 4, src: "/assets/bg.jpg", alt: "Background 4" },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto flex justify-center items-center p-9 ">
            <AppCarousel
                items={images}
                renderItem={(img) => (
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover rounded-xl"
                    />
                )}
                maxWidth="max-w-4xl"
            />
        </div>
    );
}
