import React from "react";
import styles from "../styles/card.module.scss";

export function BorderedCard({children}: { children: React.ReactNode }) {
    return (
        <div className={styles.borderedCardContainer}>
            {children}
        </div>
    );
}