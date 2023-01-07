import React from "react";
import Image, {StaticImageData} from "next/image";

type ButtonContainerProps = {
    imageSrc: StaticImageData,
    onClick?: () => void
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({imageSrc, onClick}: {
    imageSrc: StaticImageData,
    onClick?: () => void
}) => {
    return (
        <>
            <div onClick={onClick}
                style={{
                width: "45px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                cursor: "pointer"
            }}>
                <Image src={imageSrc} alt={"icon-image"} width={25} height={25}/>
            </div>
        </>
    )
}

export default ButtonContainer;