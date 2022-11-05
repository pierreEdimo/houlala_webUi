import {useRecoilState} from "recoil";
import {openState} from "../atoms/dropdown.atoms";
import styles from "../styles/dropdown.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import iconStyles from "../styles/app.header.module.scss";

export default function NotificationDropDown() {
    const [isOpen, setIsOpen] = useRecoilState(openState);
    return (
        <div>
            <div className={styles.dropdown}>
             <span onClick={() => setIsOpen(!isOpen)}>
                                  <div className={iconStyles.iconItem}>
                                        <FontAwesomeIcon icon={faBell} className={iconStyles.iconSize}/>
                                        <p>Notifications</p>
                                  </div>
             </span>
                {
                    isOpen ? (
                        <div className={styles.dropdownContent}>
                            <div className={styles.titleContainer}>
                                <h4 className={styles.dropdownTitle}>Notifications</h4>
                            </div>
                            <p>notifications</p>
                        </div>
                    ) : (<div></div>)
                }
            </div>
        </div>
    );

}