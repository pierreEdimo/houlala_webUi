import {useCategoryList} from "../hooks/category.hooks";
import styles from "../styles/category.module.scss";
import {GridCategoryContainer} from "./grid.category.container";

export function CategoryList() {
    const categoryList = useCategoryList("https://api.houlala.store/marketplace/categories");

    return (
        <div className={styles.gridContainer}>
            {categoryList.map((category) => (
                <GridCategoryContainer key={category._id} category={category}/>
            ))}
        </div>
    );
}