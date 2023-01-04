import React from "react";
import styles from "../styles/fruits.lettuces.module.scss";
import {useSubCategoryList} from "../swrHooks/sub.category.hooks";
import SubCategoryContainer from "./sub.category.container";
import ProductGrid from "./product.grid";

type FruitsLettucesProps = {
    categoryId: string,
    name: string,
}

const FruitsLettuces: React.FC<FruitsLettucesProps> = ({categoryId, name}: { categoryId: string, name: string }) => {

    const CATEGORY_URL = process.env.NEXT_PUBLIC_SUBCATEGORY_URL;
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;
    const {categories, isLoading, isError} = useSubCategoryList(`${CATEGORY_URL}/category/${categoryId}`)


    if (isLoading) return <div>...Loading</div>
    if (isError) return <div>...Error</div>


    return (
        <>
            <div className={styles.fruitLettucesContainer}>
                <h2>{name}</h2>
                <div className={styles.subCategoryList}>
                    {categories?.map((category) => (
                        <SubCategoryContainer key={category._id} subCategory={category}/>
                    ))}
                </div>
                <div style={{height: "20px"}}></div>
                <h2>R&eacute;cemment ajout&eacute;e</h2>
                <ProductGrid url={`${PRODUCT_URL}`}/>
            </div>
        </>
    )
}

export default FruitsLettuces;