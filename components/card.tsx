import React from "react";
import styles from "../styles/card.module.scss"

export function Card({children, width}: { children: React.ReactNode, width: number }) {
    return (
            <div className={styles.cardContainer} style={{width: width}}>
            {children}
        </div>
    )
}