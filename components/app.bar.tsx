import {NestedLayout} from "./nested.layout";
import Image from "next/image";
import houlala from "../public/images/houlala1.png";
import Link from "next/link";
import search from "../public/images/search.png";
import React from "react";
import styles from "../styles/app.bar.module.scss";

export function AppBar({title}: { title: string }) {
    return (
        <header className={styles.appHeader}>
            <NestedLayout>
                <div className={styles.appHeaderContent}>
                    <div className={styles.titleContainer}>
                        <Image src={houlala}
                               alt="houlal-logo"
                               width={120}
                               height={80}
                        />
                        <h1>{title}</h1>
                    </div>
                    <Link href="/">
                        <div className={styles.buttonContainer}>
                            <Image src={search}
                                   alt="search-icon"
                                   width={20}
                                   height={20}
                            />
                        </div>
                    </Link>
                </div>
            </NestedLayout>
        </header>
    );
}