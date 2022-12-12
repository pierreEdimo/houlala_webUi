import {Category} from "../types/category";
import {Card} from "./card";
import {Avatar} from "./avatar";
import styles from "../styles/category.module.scss";

export function CategoryContainer({category}: { category: Category }) {
    return (
        <Card width={75}>
            <Avatar width={80}
                    height={80}
                    imageUrl={category.imageUrl}/>
            <span className={styles.title}>{category.name}</span>
        </Card>
    )
}