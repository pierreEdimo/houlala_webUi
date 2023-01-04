import {useCategoryList} from "../hooks/category.hooks";
import styles from "../styles/category.module.scss";
import GridCategoryContainer from "./grid.category.container";

export function CategoryGrid() {
    const CATEGORY_URL = process.env.NEXT_PUBLIC_CATEGORY_URL;
    const categoryList = useCategoryList(`${CATEGORY_URL}`);

    return (
        <div className={styles.gridContainer}>
            {categoryList.map((category) => (
                <GridCategoryContainer key={category._id} category={category}/>
            ))}
        </div>
    );
}