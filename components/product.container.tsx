import {Product} from "../types/product";
import styles from "../styles/product.module.scss";
import Image from "next/image";
import Link from "next/link";

export function ProductContainer({product}: { product: Product }) {
    return (

        <>
            <Link
                style={{
                    cursor: "pointer"
                }}
                href={{
                    pathname: '/product/[pid]',
                    query: {pid: product._id}
                }}>
                <div>
                    <div className={styles.productContainer}>
                        <Image src={product.imageUrl} alt={"product-image"} layout={"fill"} objectFit={"contain"}/>
                    </div>
                    <h3>{product.name}</h3>
                    <p>{product.sellingPrice} FCFA</p>
                </div>
            </Link>
        </>
    )
}