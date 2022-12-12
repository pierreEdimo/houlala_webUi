import {NextPage} from "next"
import {CategoryList} from "../components/category.list";
import {NestedLayout} from "../components/nested.layout";

const Discover: NextPage = () => {
    return (
        <NestedLayout>
            <CategoryList/>
        </NestedLayout>
    )
}


export default Discover;