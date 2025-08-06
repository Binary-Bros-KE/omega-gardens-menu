import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const OmegaHeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of background images for the carousel
    const backgroundImages = [
        "/kids/kids-banner.png",
        "/kids/swimming.png",
        "/kids/castles.png",
    ];

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <section className="relative min-h-[400px] ">
            {/* Background Images Carousel */}
            <div className="absolute inset-0">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Kids activities ${index + 1}`}
                            className="w-full h-full object-cover transform transition-transform duration-[6000ms] ease-out scale-100 hover:scale-105"
                            style={{
                                animation: index === currentImageIndex ? 'subtleZoom 6000ms ease-out forwards' : 'none'
                            }}
                        />
                        {/* Overlay */}
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div> */}
                    </div>
                ))}
            </div>


            <div className="absolute -bottom-100 left-80 transform -translate-x-1/2 -translate-y-1/2 z-99">
                <div className="bg-white rounded-full w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex flex-col items-center justify-center shadow-lg">

                    {/* Main Heading */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-bold leading-tight">
                            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                Bring your kids to
                            </span>
                            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mt-1">
                                Omega Gardens
                            </span>
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="text-center mb-6">
                        <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed max-w-xs md:max-w-sm">
                            Fun, engaging, and educational activities ensuring memorable experiences for your little ones
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>
      
    </section >
  );
};

export default OmegaHeroSection;