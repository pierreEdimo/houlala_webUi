import {NextPage} from "next"
import {CategoryList} from "../../components/category.list";
import {NestedLayout} from "../../components/nested.layout";
import {AppBar} from "../../components/app.bar";

const Index: NextPage = () => {
    return (
        <div>
            <AppBar title={"Decouvrez"}/>
            <NestedLayout>
                <CategoryList/>
            </NestedLayout>
        </div>
    )
}


export default Index;