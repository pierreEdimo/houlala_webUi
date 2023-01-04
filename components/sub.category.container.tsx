import SubCategory from "../types/sub.category";
import React from "react" ;
import styles from "../styles/sub.category.module.scss";
import {Card} from "./card";
import Avatar from "./avatar";
import Link from "next/link";

type SubCategoryContainerProps = {
    subCategory: SubCategory
}

const SubCategoryContainer: React.FC<SubCategoryContainerProps> = ({subCategory}: { subCategory: SubCategory }) => {
    return (
        <>
            <Card>
                <Link href={"/"}>
                    <div className={styles.subCategoryContainer}>
                        <div className={styles.imageThumbnail}>
                            <Avatar imageUrl={subCategory.thumbNailUrl} type={"avatar"}/>
                        </div>
                        <h3>{subCategory.label}</h3>
                    </div>
                </Link>
            </Card>
        </>
    )
}

export default SubCategoryContainer;