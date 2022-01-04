import React from "react";
import styles from './style.module.scss';

const Tab = (props) => {
    return(
        <div className={styles.tab}>
            <img src={props.src}></img>
            <p>{props.title}</p>
        </div>
    )
}

export default Tab;