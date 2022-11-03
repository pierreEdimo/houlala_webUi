import styles from "../styles/nested.layout.module.scss";

export default function MobileNestedLayout({children}: any) {
    return (
        <div className={styles.mobileContainer}>
            {children}
        </div>
    );
}