import React from "react";
import styles from './style.module.scss';

const Tab = (props) => {

    return(
        <div className={styles.tab} >
            <img className={styles.tabImage} src={props.src}></img>
            <p>{props.title}</p>
        </div>
    )
}

export default Tab;