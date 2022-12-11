import {Product} from "../types/product";
import styles from "../styles/product.module.scss";
import Image from "next/image";

export function ProductContainer({product}: { product: Product }) {
    return (

           <div className={styles.productContainer}>
               <div className={styles.imageContainer}>
                   <Image className={styles.productImage}
                          src={product.imageUrl}
                          alt="product-image"
                          layout="fill"
                          objectFit="contain"
                          priority={true}
                   />
               </div>
               <h3>{product.name}</h3>
               <p>{product.sellingPrice} FCFA</p>
           </div>
    )
}