import WeddingContactCTA from "./components/WeddingContactCTA";
import WeddingGalary from "./components/WeddingGalary";
import WeddingHero from "./components/WeddingHero";
import WeddingServices from "./components/WeddingServices";
import WeddingServicesDetails from "./components/WeddingServicesDetails";


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
