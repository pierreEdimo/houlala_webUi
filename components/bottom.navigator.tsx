import styles from "../styles/bottom.nav.module.scss";
import Link from "next/link";
import house from "../public/images/house.png";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faUser} from "@fortawesome/free-regular-svg-icons";


export default function BottomNavigator() {
    return (
        <div className={styles.bottomNav}>
            <Link href="/">
                <Image src={house} width={25} height={25} alt="logo of a house"/>
            </Link>
            <Link href="/">
                <Image src={category} width={25} height={25} alt="logo of categories"/>
            </Link>
            <Link href="/">
                <Image src={cart} width={25} height={25} alt="logo of a cart"/>
            </Link>
            <Link href="/">
                <FontAwesomeIcon className={styles.iconSize} icon={faBell}/>
            </Link>
            <Link href="/">
                <FontAwesomeIcon className={styles.iconSize} icon={faUser}/>
            </Link>
        </div>
    );
}