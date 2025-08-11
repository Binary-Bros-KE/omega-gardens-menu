import React from "react";

const IntroComponent = ({ backgroundImage, heading, route }) => {
    return (
        <div
            className="relative w-full h-80 flex items-center font-fredoka"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-green-600/50"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-8">
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">{heading}</h1>
                <span className="text-white text-lg md:text-xl font-medium capitalize">
                    home / {route}
                </span>
            </div>
        </div>
    );
};

export default IntroComponent;