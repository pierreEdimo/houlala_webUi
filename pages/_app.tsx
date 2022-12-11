import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import houlala from "../public/images/Houlala.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import search from "../public/images/search.png";
import {NestedLayout} from "../components/nested.layout";
import house from "../public/images/house.png";
import category from "../public/images/category.png";
import cart from "../public/images/cart.png";
import bell from "../public/images/notification.png";
import user from "../public/images/user.png";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
            <header className="app-header">
                <NestedLayout>
                    <div className="app-header-content">
                        <div className="title-container">
                            <Image src={houlala}
                                   alt="houlal-logo"
                                   width={100}
                                   height={75}
                            />
                            <h1>Houlala</h1>
                        </div>
                        <Link href="/">
                            <div className="button-container">
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
            <Component {...pageProps} />
            <footer className="bottom-bar">
               <NestedLayout>
                   <div className="bottom-bar-content">
                       <Link href="/">
                           <Image src={house} width={30} height={30} alt="house-image" />
                       </Link>
                       <Link href="/">
                           <Image src={category} width={30} height={30} alt="category-image"/>
                       </Link>
                       <Link href="/">
                           <Image src={cart} width={30} height={30} alt="corbeille-image"/>
                       </Link>
                       <Link href="/">
                           <Image src={bell} width={30} height={30} alt="notification-image"/>
                       </Link>
                       <Link href="/">
                           <Image src={user} width={30} height={30} alt="user-image"/>
                       </Link>
                   </div>
               </NestedLayout>
            </footer>
        </RecoilRoot>
    );
}

export default MyApp
