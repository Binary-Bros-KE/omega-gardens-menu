import React from "react";

const images = [
    "/weekend-foods/1.jpg",
    "/weekend-foods/4.jpg",
    "/weekend-foods/2.jpg",
    "/weekend-foods/3.jpg",
    "/weekend-foods/5.jpg",
];

const WeekendFoods = () => {
    return (
        <div className={`grid grid-cols-5 w-full gap-0`}>
            {images.map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    alt={`Weekend Food ${idx + 1}`}
                    className="w-full aspect-square object-cover block"
                />
            ))}
        </div>
    );
};

export default WeekendFoods;
