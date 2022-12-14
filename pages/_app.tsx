import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {NestedLayout} from "../components/nested.layout";
import house from "../public/images/house.png";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import bell from "../public/images/notification.png";
import user from "../public/images/user.png";
import Head from "next/head";
import '@fortawesome/fontawesome-svg-core/styles.css'
import AppBar from '../components/app.bar';

function MyApp({Component, pageProps}: AppProps) {

    const title = "Houlala";

    return (
        <RecoilRoot>
            <Head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{title}</title>
            </Head>
            <AppBar title={"Houla la"}/>
            <Component {...pageProps} />
            <footer className="bottom-bar">
                <NestedLayout>
                    <div className="bottom-bar-content">
                        <Link href="/">
                            <Image src={house} width={25} height={25} alt="house-image"/>
                        </Link>
                        <Link href="/discover">
                            <Image src={category} width={25} height={25} alt="category-image"/>
                        </Link>
                        <Link href="/cart">
                            <Image src={cart} width={25} height={25} alt="corbeille-image"/>
                        </Link>
                        <Link href="/notification">
                            <Image src={bell} width={25} height={25} alt="notification-image"/>
                        </Link>
                        <Link href="/user">
                            <Image src={user} width={25} height={25} alt="user-image"/>
                        </Link>
                    </div>
                </NestedLayout>
            </footer>
        </RecoilRoot>
    );
}

export default MyApp
