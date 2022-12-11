import type {NextPage} from 'next'
import Head from "next/head";
import {HomeCategoryList} from "../components/home.category.list";
import {HomeProductList} from "../components/home.product.list";
import {HomeLocationList} from "../components/home.location.list";
import {NestedLayout} from "../components/nested.layout";


const title = "Houlala";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{title}</title>
            </Head>
            <main>
                <NestedLayout>
                    <HomeCategoryList/>
                    <br/>
                    <HomeProductList/>
                    <br/>
                    <HomeLocationList/>
                </NestedLayout>
            </main>
        </div>
    )
}

export default Home
