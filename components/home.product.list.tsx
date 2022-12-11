import {useProductList} from "../hooks/product.hooks";
import styles from "../styles/product.module.scss";
import {ProductContainer} from "./product.container";


export function HomeProductList() {
    const productList = useProductList("https://api.houlala.store/marketplace/products");

    return (
        <div>
            <h2>Fruits & Legumes</h2>
            <div className={styles.homeProductListContainer}>
                {
                    productList.map((product) => (
                        <ProductContainer key={product._id} product={product}/>
                    ) )
                }
            </div>
        </div>
    );
}