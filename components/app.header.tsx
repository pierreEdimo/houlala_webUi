import styles from "../styles/app.header.module.scss";
import NestedLayout from "./nested.layout";
import Link from "next/link";
import {faBell, faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Image from "next/image";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import search from "../public/images/search.png";

export default function AppHeader({title}: { title?: string }) {
    return (
        <header className={styles.appHeader}>
            <NestedLayout>
                <div className={styles.appHeaderContent}>
                    <div className={styles.logoContainer}>
                        <h4 className={styles.title}>{title}</h4>
                        <form className={styles.searchform}>
                            <input className={styles.searchInput} type="text" placeholder="search"/>
                            <button className={styles.searchButton}>
                                <Image src={search} width={20} height={20} alt="search logo"/>
                            </button>
                        </form>
                    </div>
                    <div className={styles.appHeaderContentMenu}>
                        <Link href="/">
                            <div className={styles.iconItem}>
                                <Image className={styles.imageIcon} src={category} alt="Icon for Category" width={22}
                                       height={22}/>
                                <p>Categories</p>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className={styles.iconItem}>
                                <Image src={cart} alt="Icon for Cart" height={22} width={22}/>
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
        </header>
    );
}