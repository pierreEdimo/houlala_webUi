import {useCategoryList} from "../hooks/category.hooks";
import styles from "../styles/category.module.scss";
import {CategoryContainer} from "./category.container";

export function HomeCategoryList() {
    const categoryList = useCategoryList("https://api.houlala.store/marketplace/categories");

    return (
        <div>
            <h2>Categories</h2>
            <div className={styles.homeCategoryContainer}>
                {categoryList.map((category) => (
                    <CategoryContainer key={category._id} category={category}/>
                ))}
            </div>
        </div>

    )
}