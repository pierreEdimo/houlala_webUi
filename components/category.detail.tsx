import React from "react";
import {useCategory} from "../swrHooks/category.hooks";
import FruitsLettuces from "./fruits.lettuces";

type CategoryDetailProps = {
    categoryId: string;
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({categoryId}: { categoryId: string }) => {
    const CATEGORY_URL = process.env.NEXT_PUBLIC_CATEGORY_URL;
    const {category, isLoading, isError} = useCategory(`${CATEGORY_URL}/${categoryId}`);

    if (isLoading) return <div>...Loading</div>
    if (isError) return <div>...Error</div>

    switch (category?.name) {
        case "fruits & legumes":
            return (
                <>
                    <FruitsLettuces categoryId={category?._id} name={category?.name}/>
                </>
            )
        default:
            return <div>No Products</div>
    }
}

export default CategoryDetail;