import {NextPage} from "next";
import styles from "../../styles/notification.module.scss";
import notification from "../../public/images/sound-off.png";
import Image from "next/image";
import {NestedLayout} from "../../components/nested.layout";
import {AppBar} from "../../components/app.bar";


const Index: NextPage = () => {
    return (
        <div>
            <AppBar title={"Notification"}/>
            <NestedLayout>
                <div className={styles.notificationContainer}>
                    <Image src={notification} width={130} height={130} alt="no-notification image"/>
                    <br/>
                    <p style={{textAlign: "center"}}>Vous n avez encore aucunes Notifications. </p>
                </div>
            </NestedLayout>
        </div>
    )
}

export default Index;