import KidsSection from "../../components/KidsSection";
import ChildrenPageIntro from "./components/ChildrenIntro";
import KidsActivitiesSection from "./components/KidsActivitiesSection";
import SwimmingPool from "./components/SwimmingPool";

export default function ChildrenPage() {
    return (
        <div>
            <div>
                <ChildrenPageIntro />
            </div>
            <div>
                <KidsActivitiesSection />
            </div>
            <div>
                <SwimmingPool />
            </div>
            <div>
                <KidsSection />
            </div>
        </div>
    )
}
