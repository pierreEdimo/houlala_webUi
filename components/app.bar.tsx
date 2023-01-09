import {NestedLayout} from "./nested.layout";
import Image from "next/image";
import houlala from "../public/images/houlala1.png";
import Link from "next/link";
import search from "../public/images/search.png";
import React from "react";
import styles from "../styles/app.bar.module.scss";
import ButtonContainer from "./button.container";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import {useRouter} from "next/router";
import NotificationDropdown from "./notification.dropdown";
import OptionsDropdown from "./options.dropdown";
import NavSearch from "./nav.search";


const AppBar = ({title}: { title: string }) => {

    const router = useRouter()

    return (
        <header className={styles.appHeader}>
            <NestedLayout>
                <div className={styles.appHeaderContent}>
                    <Link href={"/"}>
                        <div className={styles.titleContainer}>
                            <Image src={houlala}
                                   alt="houlal-logo"
                                   width={120}
                                   height={80}
                            />
                            <h2>{title}</h2>
                        </div>
                    </Link>
                    <ButtonContainer imageSrc={search}/>
                </div>
                <div className={styles.desktopAppHeaderContent}>
                    <div>
                        <Link href={"/"}>
                            <div className={styles.titleContainer}>
                                <Image src={houlala}
                                       alt="houlal-logo"
                                       width={120}
                                       height={80}
                                />
                                <h2>{title}</h2>
                            </div>
                        </Link>
                    </div>
                    <NavSearch/>
                    <div style={{display: "flex", gap: "20px"}}>
                        <ButtonContainer onClick={() => router.push('/discover')} imageSrc={category}/>
                        <ButtonContainer onClick={() => router.push('/cart')} imageSrc={cart}/>
                        <NotificationDropdown/>
                        <OptionsDropdown/>
                    </div>
                </div>
            </NestedLayout>
        </header>
    );
}

export default AppBar;