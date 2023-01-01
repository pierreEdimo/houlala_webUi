import {useCategoryList} from "../hooks/category.hooks";
import styles from "../styles/category.module.scss";
import {CategoryContainer} from "./category.container";

export function HomeCategoryList() {
    const CATEGORY_URL = process.env.NEXT_PUBLIC_CATEGORY_URL;
    const categoryList = useCategoryList(`${CATEGORY_URL}`);

    return (
        <div>
            <h2>Categories</h2>
            <div className={styles.homeCategoryContainer}>
                {categoryList.map((category) => (
                    <CategoryContainer key={category._id} category={category}/>
                ))}
            </div>
        </div>
    );
}