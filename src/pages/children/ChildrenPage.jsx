import IntroComponent from "../../components/IntroComponent";
import KidsSection from "../../components/KidsSection";
import ChildrenPageIntro from "./components/ChildrenIntro";
import KidsActivities from "./components/KidsActivities";
import KidsActivitiesSection from "./components/KidsActivitiesSection";
import SwimmingPool from "./components/SwimmingPool";

export default function ChildrenPage() {
    return (
        <div>
            <div>
                <IntroComponent heading={"Bring your kids to OMEGA"} route={"children-activities"} backgroundImage={"/kids/swimming.png"}/>
            </div>
            <div>
                <KidsActivities />
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
