import Image from "next/image";
import avatarStyles from "../styles/avatar.module.scss";


export function Avatar({imageUrl, width, height,}: {
    imageUrl: string,
    width: number,
    height: number
}) {
    return (
        <div style={{
            width: width,
            height: height,
            position: "relative"
        }}>
            <Image className={avatarStyles.avatar}
                   src={imageUrl} alt="category-image"
                   layout="fill"
                   objectFit="cover"
                   priority={true}
            />
        </div>
    );
}