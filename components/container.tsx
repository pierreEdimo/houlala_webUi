import styles from "../styles/container.module.scss";
import React from "react";

type ContainerProps = {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}: { children: React.ReactNode }) => {
    return <>
        <div className={styles.container}>
            {children}
        </div>
    </>
}

export default Container; 