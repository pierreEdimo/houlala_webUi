import {useProductList} from "../hooks/product.hooks";
import styles from "../styles/product.module.scss";
import {ProductContainer} from "./product.container";


export function HomeProductList() {
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;
    const productList = useProductList(`${PRODUCT_URL}`);

    return (
        <div>
            <h2>Fruits & Legumes</h2>
            <div className={styles.homeProductListContainer}>
                {
                    productList.map((product) => (
                        <ProductContainer key={product._id} product={product}/>
                    ))
                }
            </div>
        </div>
    );
}