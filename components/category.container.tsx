import {Category} from "../types/category";
import styles from "../styles/category.module.scss";
import Container from "./container";
import Link from "next/link";
import Avatar from "./avatar";

export function CategoryContainer({category}: { category: Category }) {
    return (
        <>
            <Container>
                <Link href={`/category/${category._id}`}>
                    <div style={{cursor: "pointer"}}>
                        <div className={styles.avatarContainer}>
                            <Avatar imageUrl={category.imageUrl} type={"thumbnail"}/>
                        </div>
                        <h3 className={styles.title}>{category.name}</h3>
                    </div>
                </Link>
            </Container>
        </>
    )
}