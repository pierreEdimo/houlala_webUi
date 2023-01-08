import React from "react";
import styles from "../styles/options.module.scss";
import ButtonContainer from "./button.container";
import user from "../public/images/user.png";
import {useRecoilState} from "recoil";
import {OptionState} from "../atoms/options.atoms";
import {useEffect, useCallback} from "react";
import ListTiles from "./list.tiles";
import {
    faHeart,
    faBagShopping,
    faCircleUser,
    faInfo,
    faLock,
    faShield,
    faArrowRightToBracket
} from "@fortawesome/free-solid-svg-icons";

const OptionsDropdown = () => {
    const [isOpen, setIsOpen] = useRecoilState(OptionState);

    const openOptions = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
        event.stopPropagation();
        if (!isOpen) {
            document.getElementById("options")!.style.display = "block";
            setIsOpen(true);
        } else {
            document.getElementById("options")!.style.display = "none";
            setIsOpen(false);
        }
    }, [isOpen, setIsOpen]);


    useEffect(() => {
        window.onclick = () => {
            if (isOpen) {
                document.getElementById("options")!.style.display = "none";
                setIsOpen(false);
            }
        };
    })

    return (
        <>
            <div className={styles.optionContainer}>
                <div onClick={openOptions}>
                    <ButtonContainer imageSrc={user}/>
                </div>
                <div className={styles.optionsDropdownContent} id={"options"}>
                    <h3>Mon Compte</h3>
                    <ListTiles icon={faHeart} title={"Mes Favoris"}/>
                    <ListTiles icon={faBagShopping} title={"Mes Commandes"}/>
                    <ListTiles icon={faCircleUser} title={"Mes Donnees personnelles"}/>
                    <ListTiles icon={faInfo} title={"A propos"}/>
                    <ListTiles icon={faLock} title={"Conditions d'utilisation"}/>
                    <ListTiles icon={faShield} title={"Politique de confidentialites"}/>
                    <ListTiles icon={faArrowRightToBracket} title={"Se Connecter/s'enregister"}/>
                </div>
            </div>
        </>
    )
}

export default OptionsDropdown;