import {BorderedCard} from "./border.card";
import {Location} from "../types/location";
import styles from "../styles/location.module.scss";
import {Avatar} from "./avatar";

export function HorizontalLocationContainer({location}: {location: Location}){
    return (
        <BorderedCard>
            <div className={styles.imageContainer} >
                <Avatar
                    imageUrl={location.imageUrl}
                    width={60}
                    height={60}
                />
            </div>
            <div style={{height: 10}}></div>
            <h3 className={styles.productTitle}>{location.name}</h3>
            <h4 className={styles.smallTitle}>{location.category.name}</h4>
            <h5 className={styles.smallTitle}>{location.address.city}</h5>
        </BorderedCard>
    );
}