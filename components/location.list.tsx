import React from "react";
import styles from "../styles/location.module.scss";
import {useLocationList} from "../swrHooks/location.hooks";
import Spinner from "./spinner";
import VerticalLocationContainer from "./vertical.location.container";
import NoItems from "./no.items";
import shop from "../public/images/shop.png";

type LocationListProps = {
    url: string;
}

const LocationList: React.FC<LocationListProps> = ({url}) => {
    const {locations, isError, isLoading} = useLocationList(url);

    if (isLoading) return (
        <>
            <Spinner/>
        </>
    )

    if (isError) return (
        <>
            ...Error
        </>
    )

    return (
        <>
            {
                locations?.length! < 1 ? <NoItems errorMessage={"Nous n'avons encore aucuns magasins dans cette rubrique. Svp reessayez plutard"} iconImage={shop}/> :
                    <div className={styles.verticalList}>
                        {locations?.map((location) => (
                            <VerticalLocationContainer key={location.id} location={location}/>
                        ))}
                    </div>
            }
        </>
    )
}

export default LocationList;