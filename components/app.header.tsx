import styles from "../styles/app.header.module.scss";
import NestedLayout from "./nested.layout";
import Link from "next/link";
import {faBell, faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Image from "next/image";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import search from "../public/images/search.png";
import houlala from "../public/images/Houlala.png";


export default function AppHeader({title}: { title?: string }) {
    return (
        <header className={styles.appHeader}>
            <NestedLayout>
                <div className={styles.appHeaderContent}>
                    <div className={styles.logobox}>
                        <div className={styles.logoContainer}>
                            <Image src={houlala} width={90} height={60} alt="logo of Houlala"/>
                            <h4 className={styles.title}>{title}</h4>
                        </div>
                        <form className={styles.searchform}>
                            <input className={styles.searchInput} type="text" placeholder="search"/>
                            <button className={styles.searchButton}>
                                <Image src={search} width={18} height={18} alt="search logo"/>
                            </button>
                        </form>
                    </div>
                    <div className={styles.appHeaderContentMenu}>
                        <Link href="/">
                            <div className={styles.iconItem}>
                                <Image className={styles.imageIcon} src={category} alt="Icon for Category" width={20}
                                       height={20}/>
                                <p>Categories</p>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className={styles.iconItem}>
                                <Image src={cart} alt="Icon for Cart" height={20} width={20}/>
                                <p>Chariot</p>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className={styles.iconItem}>
                                <FontAwesomeIcon icon={faBell} className={styles.iconSize}/>
                                <p>Notifications</p>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className={styles.iconItem}>
                                <FontAwesomeIcon icon={faUser} className={styles.iconSize}/>
                                <p>Mon Compte</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </NestedLayout>
            <div className={styles.mobileAppHeaderContainer}>
                <div className={styles.mobileAppHeaderContent}>
                    <div className={styles.logoContainer}>
                        <Image src={houlala} width={90} height={60} alt="Logo of houlala"/>
                        <h4 className={styles.title}>{title}</h4>
                    </div>
                    <div className={styles.searchContainerButton}>
                        <Image src={search} height={18} width={18} alt="Logo of the search button"/>
                    </div>
                </div>
            </div>
        </header>
    );
}