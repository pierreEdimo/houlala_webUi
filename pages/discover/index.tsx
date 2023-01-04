import {NextPage} from "next"
import {NestedLayout} from "../../components/nested.layout";
import { CategoryGrid } from "../../components/category.grid";

const Index: NextPage = () => {
    return (
        <div>
            <NestedLayout>
                <h2>Decouvrez nos produits par Categories</h2>
                <CategoryGrid/>
            </NestedLayout>
        </div>
    )
}


export default Index;