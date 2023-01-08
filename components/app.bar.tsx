import {NestedLayout} from "./nested.layout";
import Image from "next/image";
import houlala from "../public/images/houlala1.png";
import Link from "next/link";
import search from "../public/images/search.png";
import React, {useCallback, useEffect,} from "react";
import styles from "../styles/app.bar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import ButtonContainer from "./button.container";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {PreviewState} from "../atoms/preview.state";
import NotificationDropdown from "./notification.dropdown";
import OptionsDropdown from "./options.dropdown";


const AppBar = ({title}: { title: string }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useRecoilState(PreviewState);

    const showPreview = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
        event.stopPropagation();
        if (!isOpen) {
            document.getElementById("searchComponent")!.style.display = "block";
            setIsOpen(true);
        }
    }, [isOpen, setIsOpen]);


    useEffect(() => {
        window.onclick = () => {
            if (isOpen) {
                document.getElementById("searchComponent")!.style.display = "none";
                setIsOpen(false);
            }
        };
    })


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
                    <div className={styles.searchContainer}>
                        <form>
                            <input type={"text"} onClick={showPreview} placeholder={"Recherche"}
                                   className={styles.textSearch}/>
                            <button className={styles.searchButton}>
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </form>
                        <div className={styles.searchPreview} id={"searchComponent"}>
                            <p>
                                Preview
                            </p>
                        </div>
                    </div>
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