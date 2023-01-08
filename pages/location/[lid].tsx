import {NextPage} from "next";
import {NestedLayout} from "../../components/nested.layout";
import BackButton from "../../components/back.button";
import {useRouter} from "next/router";
import {useLocation} from "../../swrHooks/location.hooks";
import Spinner from "../../components/spinner";
import TabView from "../../components/tab.view";
import TabHeader from "../../components/tab.header";
import Tab from "../../components/tab";
import styles from "../../styles/location.module.scss";
import search from "../../public/images/search.png";
import Image from "next/image";
import TabBody from "../../components/tab.body";
import LocationHome from "../../components/location.home";
import LocationInfo from "../../components/location.info";
import LocationProduct from "../../components/location.product";
import Avatar from "../../components/avatar";

const Location: NextPage = () => {
    const router = useRouter();
    const {lid} = router.query;
    const LOCATION_URL = process.env.NEXT_PUBLIC_LOCATION_URL;

    const {location, isLoading, isError} = useLocation(`${LOCATION_URL}/${lid}`);

    if (isLoading) return (
        <>
            <Spinner/>
        </>
    )

    if (isError) return (
        <div>
            ....Error
        </div>
    )

    return (
        <>
            <NestedLayout>
                <BackButton title={`${location?.name}`}/>
                <div className={styles.locationHeaderContainer}>
                    <div className={styles.imageContainer}>
                        <Avatar imageUrl={location?.imageUrl!} type={"avatar"}/>
                    </div>
                    <div>
                        <h2 style={{fontSize: "32px"}}>{location?.name}</h2>
                        <div className={styles.keyFigures}>
                            <p>{`${location?.productTotalCount} produits disponibles`}</p>
                            <p>{`${location?.orderSoldCount} produits vendus`}</p>
                        </div>
                    </div>
                </div>
                <TabView>
                    <div className={styles.tabHeaderContainer}>
                        <TabHeader>
                            <Tab>Accueil</Tab>
                            <Tab>Info</Tab>
                            <Tab>Produits</Tab>
                        </TabHeader>
                        <form className={styles.innerSearch}>
                            <input type={"search"} placeholder={"Recherche"}/>
                            <button>
                                <Image src={search} alt={"search-image"} width={18} height={18}/>
                            </button>
                        </form>
                    </div>
                    <TabBody>
                        <LocationHome location={location!}/>
                        <LocationInfo location={location!}/>
                        <LocationProduct location={location!}/>
                    </TabBody>
                </TabView>
            </NestedLayout>
        </>
    )
}

export default Location;