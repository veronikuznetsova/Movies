import React from "react";
import Tab from "./components/Tab";
import styles from './style.module.scss';
import Star from '../../../../images/star.svg';
import Heart from '../../../../images/heart.svg';

const Tabs = (props) => {
    return(
        <div className={styles.tabs}>
            <Tab src={Star} title='POPULAR'/>
            <Tab src={Heart} title='FAVORITES'/>
        </div>
    )
}

export default Tabs;