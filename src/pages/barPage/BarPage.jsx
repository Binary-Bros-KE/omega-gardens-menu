import LiquorShowcase from "./components/LiquorShowcase";

// Use the user's shared constants file
import { barMenu } from "../../constants/barMenu"
import CategoryCarousel from "./components/CategoryCarousel";
import BarSelectionGrid from "./components/BarSelectionGrid";
import WineFeatureSection from "./components/WineFeatureSection";
import RooftopBarSection from "./components/RooftopBarSection";
import BackyardGourmetSection from "./components/BackyardGourmetSection";
import IndoorBarSection from "./components/IndoorBarSection";
import WeekendFoods from "../hotel/components/WeekendFoods";

  const categories = Object.entries(barMenu).map(([key, cat]) => ({
    key,
    title: cat.title,
    image: cat.categoryImage,
    count: Array.isArray(cat.items) ? cat.items.length : 0,
  }))


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
                 <WeekendFoods />
            </div>
            <div>
                <IndoorBarSection />
            </div>
        </div>
    )
}
