import styles from '../styles/nested.layout.module.scss';

export default function NestedLayout({children}: any) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}