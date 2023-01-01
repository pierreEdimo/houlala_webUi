import type {NextPage} from 'next'
import {HomeCategoryList} from "../components/home.category.list";
import {HomeProductList} from "../components/home.product.list";
import {HomeLocationList} from "../components/home.location.list";
import {NestedLayout} from "../components/nested.layout";
import {AppBar} from "../components/app.bar";


const Home: NextPage = () => {
    return (
        <div>
            <AppBar title={"Houla la"}/>
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
