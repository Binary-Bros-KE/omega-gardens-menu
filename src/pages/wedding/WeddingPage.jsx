import WeddingContactCTA from "./components/WeddingContactCTA";
import WeddingGalary from "./components/WeddingGalary";
import WeddingHero from "./components/WeddingHero";
import WeddingServices from "./components/WeddingServices";
import WeddingServicesDetails from "./components/WeddingServicesDetails";

const images = [
    "/wedding/wedding-hero.jpg",
    "/slider/slider-3.jpg",
    "/home/wedding.png",
    "/wedding/wedding-2.jpg",
    "/omega/omega.jpeg",
    "/omega/sitting.jpg",
    "/wedding/wedding-4.jpg",
    "/wedding/wedding-5.jpg",
    "/wedding/wedding-6.jpg",
    "/weekend-foods/5.jpg",
];


export default function WeddingPage() {
    return (
        <div>
            <div>
                <WeddingHero />
            </div>
            <div>
                <WeddingServices />
            </div>
            <div>
                <WeddingServicesDetails />
            </div>
            <div>
                <WeddingGalary />
            </div>
        </div>
    )
}
