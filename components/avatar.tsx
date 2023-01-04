import Image from "next/image";
import avatarStyles from "../styles/avatar.module.scss";
import React from "react";

type AvatarProps = {
    imageUrl: string;
    type: string;
}

const Avatar: React.FC<AvatarProps> = ({imageUrl, type}: { imageUrl: string, type: string }) => {
    switch (type) {
        case "thumbnail":
            return (
                <div className={avatarStyles.avatarContainer}>
                    <Image className={avatarStyles.thumbnail}
                           src={imageUrl} alt="category-image"
                           layout="fill"
                           objectFit="cover"
                           priority={true}
                    />
                </div>
            )
        case "avatar":
        default:
            return (
                <div className={avatarStyles.avatarContainer}>
                    <Image className={avatarStyles.avatar}
                           src={imageUrl} alt="category-image"
                           layout="fill"
                           objectFit="cover"
                           priority={true}
                    />
                </div>
            )
    }

}

export default Avatar;