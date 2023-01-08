import React from "react";
import {useCategory} from "../swrHooks/category.hooks";
import FruitsLettuces from "./fruits.lettuces";
import NoProducts from "./no.products";
import BackButton from "./back.button";
import StoreContainer from "./store.container";
import Spinner from "./spinner";

type CategoryDetailProps = {
    categoryId: string;
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({categoryId}: { categoryId: string }) => {
    const CATEGORY_URL = process.env.NEXT_PUBLIC_CATEGORY_URL;
    const {category, isLoading, isError} = useCategory(`${CATEGORY_URL}/${categoryId}`);

    if (isLoading) return (
        <div>
            <Spinner/>
        </div>
    )

    if (isError) return <div>...Error</div>

    switch (category?.name) {
        case "fruits & legumes":
            return (
                <>
                    <FruitsLettuces categoryId={category?._id} name={category?.name}/>
                </>
            )
        case "magasins":
            return (
                <>
                    <StoreContainer categoryId={`${category?._id}`} categoryName={`${category?.name}`}/>
                </>
            )
        default:
            return (
                <>
                    <BackButton title={`${category?.name}`}/>
                    <NoProducts
                        errorMessage={`Desole nous n'avons pas encore de produit dans la categorie ${category?.name}\n.
                Nous travaillons tres dure pour ameliorer nos services.\n Svp reessayez plutard.`}/>
                </>
            )
    }
}

export default CategoryDetail;