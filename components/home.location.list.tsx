import {useLocationList} from "../hooks/location.hooks";
import {HorizontalLocationContainer} from "./horizontal.location.container";
import styles from "../styles/location.module.scss";

export function HomeLocationList() {
    const locationList = useLocationList("https://api.houlala.store/discovery-orchestrator/locations/store");

    return(
        <div>
            <h2>Magasins</h2>
            <div className={styles.horizontalList} >
                {
                    locationList.map((location) => (
                        <HorizontalLocationContainer key={location.id} location={location} />
                    ))
                }
            </div>
        </div>
    );
}