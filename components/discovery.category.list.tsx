import React from "react";
import {useCategoryList} from "../swrHooks/discovery.category.hooks";
import Spinner from "./spinner";
import styles from "../styles/category.module.scss";
import SubCategoryContainer from "./sub.category.container";
import {useRouter} from "next/router";

type DiscoveryCategoryListProps = {}


const DiscoveryCategoryList: React.FC<DiscoveryCategoryListProps> = () => {
    const CATEGORY_URL = process.env.NEXT_PUBLIC_DISCOVERY_CATEGORY_URL;
    const {categories, isError, isLoading} = useCategoryList(`${CATEGORY_URL}/store`);
    const router = useRouter();

    if (isLoading) return (
        <>
            <Spinner/>
        </>
    )

    if (isError) return <p>...Error</p>

    return (
        <>
            <div className={styles.homeCategoryContainer}>
                {categories?.map((category) => (
                    <SubCategoryContainer key={category.id}
                                          label={category.name}
                                          thumbNailUrl={category.thumbNail}
                                          onClick={() => router.push(`/store-category/${category.id}`)}/>
                ))}
            </div>
        </>
    )
}

export default DiscoveryCategoryList;