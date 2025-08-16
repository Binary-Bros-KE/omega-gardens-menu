import LiquorShowcase from "./components/LiquorShowcase";

// Use the user's shared constants file
import { barMenu } from "../../constants/barMenu"
import CategoryCarousel from "./components/CategoryCarousel";
import BarSelectionGrid from "./components/BarSelectionGrid";
import WineFeatureSection from "./components/WineFeatureSection";
import RooftopBarSection from "./components/RooftopBarSection";
import BackyardGourmetSection from "./components/BackyardGourmetSection";
import IndoorBarSection from "./components/IndoorBarSection";
import GallaryComponent from "../../components/GallaryComponent";

  const categories = Object.entries(barMenu).map(([key, cat]) => ({
    key,
    title: cat.title,
    image: cat.categoryImage,
    count: Array.isArray(cat.items) ? cat.items.length : 0,
  }))

  const barImages = [
    "/bar-menu/indoor-bar/omega-bar-indoor-2.jpg",
    "/bar-menu/counter-2.jpg",
    "/bar-menu/indoor-bar/omega-bar-indoor-1.jpg",
    "/bar-menu/vodka.jpg",
    "/bar-menu/indoor-bar/bar-banner.jpg",
];


export default function BarPage() {
    return (
        <div>
            <div>
                <LiquorShowcase />
            </div>
            <div>
                <CategoryCarousel categories={categories} />
            </div>
            <div>
                <BarSelectionGrid barMenu={barMenu} />
            </div>
            <div>
                <WineFeatureSection />
            </div>
            <div>
                <BarSelectionGrid barMenu={barMenu} />
            </div>
            <div>
                <RooftopBarSection />
            </div>
            <div>
                <BackyardGourmetSection />
            </div>
            <div>
                 <GallaryComponent images={barImages}/>
            </div>
            <div>
                <IndoorBarSection />
            </div>
        </div>
    )
}
