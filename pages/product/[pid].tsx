import {NextPage} from "next";
import styles from "../../styles/product.module.scss";
import {useRouter} from "next/router";
import {AppBar} from "../../components/app.bar";
import {NestedLayout} from "../../components/nested.layout";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {useProduct} from "../../swrHooks/product.hooks";
import BackButton from "../../components/back.button";

const Product: NextPage = () => {
    const router = useRouter();
    const {pid} = router.query;
    const PRODUCT_Url = process.env.NEXT_PUBLIC_PRODUCT_URL;
    const {product, isLoading, isError} = useProduct(`${PRODUCT_Url}/${pid}`);

    if (isLoading) return <div>...Loading</div>

    if (isError) return <div>...Error</div>

    return (
        <>
            <NestedLayout>
                <BackButton title={product?.name!}/>
                <div style={{height: "10px"}}></div>
                <div className={styles.productPageContainer}>
                    <div className={styles.productPage}>
                        <div className={styles.productImageContainer}>
                            <div className={styles.productImage}>
                                <Image src={product!.imageUrl}
                                       style={{borderRadius: "20px"}}
                                       alt={"product-image"}
                                       layout={"fill"}
                                       objectFit={"contain"}
                                       priority={true}/>
                            </div>
                        </div>
                        <div className={styles.infoProductContainer}>
                            <p className={styles.sellingPrice}>{product!.sellingPrice} XAF</p>
                            <div className={styles.productCount}>
                                <span>-</span>
                                <p>1</p>
                                <span>+</span>
                            </div>
                            <div>
                                <p style={{margin: "0"}}>Vendeur: <b>{product!.locationName}</b></p>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>
                                    <FontAwesomeIcon icon={faBagShopping}/>
                                    <p>Ajouter au panier</p>
                                    <div></div>
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faHeart}/>
                                    <p>Ajouter aux favoris</p>
                                    <div></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ReactMarkdown>
                        {product!.description}
                    </ReactMarkdown>
                </div>
                <div className={styles.mobileProductPageContainer}>
                    <div className={styles.productImageContainer}>
                        <div className={styles.productImage}>
                            <Image src={product!.imageUrl}
                                   layout={"fill"} objectFit={"contain"}
                                   priority={true}
                                   alt={"product-image"}/>
                        </div>
                    </div>
                    <div className={styles.mobileInfoProductContainer}>
                        <div className={styles.mobileProductCount}>
                            <p className={styles.sellingPrice}>{product!.sellingPrice} XAF</p>
                            <div className={styles.productCount}>
                                <span>-</span>
                                <p>1</p>
                                <span>+</span>
                            </div>
                        </div>
                        <div>
                            <p style={{margin: "0"}}>Vendeur: <b>{product!.locationName}</b></p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button>
                                <FontAwesomeIcon icon={faBagShopping}/>
                                <p>Ajouter au panier</p>
                                <div></div>
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faHeart}/>
                                <p>Ajouter aux favoris</p>
                                <div></div>
                            </button>
                        </div>
                    </div>
                    <ReactMarkdown>
                        {product!.description}
                    </ReactMarkdown>
                </div>
            </NestedLayout>
        </>
    )
}

export default Product;