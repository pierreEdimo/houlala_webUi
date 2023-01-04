import React from "react";
import styles from "../styles/product.module.scss";
import {useProductList} from "../swrHooks/product.hooks";
import {ProductContainer} from "./product.container";

type ProductGridProps = {
    url: string;
}

const ProductGrid = ({url}: {url: string}) => {
    const {products,  isLoading, isError} = useProductList(url);

    if(isLoading) return <div>...loading</div>
    if (isError) return <div>...Error</div>

    return (
            <>
            <div className={styles.productGrid}>
                {
                    products?.map((product) => (
                            <ProductContainer key={product._id} product={product}/>
                    ))
                }
            </div>
            </>
    )
}

export default ProductGrid;