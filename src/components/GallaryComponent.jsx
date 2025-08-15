import React, { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

const GallaryComponent = ({ images = [] }) => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const openOverlay = (idx) => {
        setCurrent(idx);
        setOpen(true);
    };

    const closeOverlay = () => setOpen(false);

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Keyboard navigation
    React.useEffect(() => {
        if (!open) return;
        const handleKey = (e) => {
            if (e.key === "ArrowLeft") prevImage(e);
            if (e.key === "ArrowRight") nextImage(e);
            if (e.key === "Escape") closeOverlay();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
        // eslint-disable-next-line
    }, [open, current]);

    if (!images.length) return null;

    return (
        <>
            <div className="grid grid-cols-5 w-full gap-0">
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="relative group cursor-pointer"
                        onClick={() => openOverlay(idx)}
                    >
                        <img
                            src={src}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full aspect-square object-cover block transition-transform duration-200 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                            <ZoomIn size={36} color="#fff" />
                        </div>
                    </div>
                ))}
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
                    onClick={closeOverlay}
                >
                    <button
                        className="absolute top-6 right-8 text-white z-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeOverlay();
                        }}
                        aria-label="Close"
                    >
                        <X size={36} />
                    </button>
                    <button
                        className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 text-white z-50"
                        onClick={prevImage}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <img
                        src={images[current]}
                        alt={`Gallery Large ${current + 1}`}
                        className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 text-white z-50"
                        onClick={nextImage}
                        aria-label="Next"
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>
            )}
        </>
    );
};

export default GallaryComponent;
