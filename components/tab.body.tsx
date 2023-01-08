import styles from "../styles/tab.view.module.scss";
import React from "react";
import {useRecoilState} from "recoil";
import {TabState} from "../atoms/tabs.atoms";

type TabBodyProps = {
    children: Array<React.ReactNode>
}

const TabBody: React.FC<TabBodyProps> = ({children}) => {
    const [isActive, setActive] = useRecoilState(TabState);

    return (
        <>
            <div className={styles.tabBody}>
                {children[isActive]}
            </div>
        </>
    )
}

export default TabBody