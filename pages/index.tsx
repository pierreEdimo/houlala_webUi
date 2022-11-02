import type {NextPage} from 'next'
import Head from "next/head";
import AppHeader from "../components/app.header";
import BottomNavigator from "../components/bottom.navigator";

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
            <AppHeader title={title}/>
            <main>
            </main>
            <BottomNavigator/>
        </div>
    )
}

export default Home
