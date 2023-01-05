import React from "react";
import shop from "../public/images/shop.png";
import styles from "../styles/no.products.module.scss";
import Avatar from "./avatar";

type NoProudctsProps = {
    errorMessage: string;
}

const NoProducts: React.FC<NoProudctsProps> = ({errorMessage}: { errorMessage: string }) => {
    return (
        <>
            <div className={styles.noProductContainer}>
                <div className={styles.iconImage}>
                    <Avatar imageUrl={shop} type={"thumbnail"}/>
                </div>
                <div className={styles.errorMessageContainer}>
                    <p className={styles.errorMessage}>{errorMessage}</p>
                </div>
            </div>
        </>
    )

}

export default NoProducts;