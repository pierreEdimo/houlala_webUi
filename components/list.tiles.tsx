import React from "react";
import styles from "../styles/list.tile.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

type ListTileProps = {
    icon: IconProp,
    title: string
}

const ListTiles: React.FC<ListTileProps> = ({icon, title}: { icon: IconProp, title: string }) => {
    return (
        <>
            <div className={styles.listTileContainer}>
                <div style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                }}>
                    <FontAwesomeIcon icon={icon}/>
                    <p>{title}</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </>
    )
}

export default ListTiles;