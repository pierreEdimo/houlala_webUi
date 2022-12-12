import React from "react";
import styles from "../styles/card.module.scss";

export function BorderedCard({children, width}: { children: React.ReactNode, width:number }) {
    return (
            <div className={styles.borderedCardContainer} style={{width: width}}>
            {children}
        </div>
    );
}