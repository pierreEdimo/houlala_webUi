import {Category} from "../types/category";
import {Avatar} from "./avatar";
import styles from "../styles/category.module.scss";

export function GridCategoryContainer({category}: { category: Category }) {
    return (
            <div className={styles.categoryCategoryContainer}>
            <Avatar imageUrl={category.imageUrl}
                    width={90}
                    height={90}/>
            <span className={styles.title}>{category.name}</span>
        </div>
    );
}