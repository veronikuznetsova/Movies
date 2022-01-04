import React from "react";
import Input from "./components/Input";
import Tabs from "./components/Tabs";
import styles from './style.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
        <Tabs />
        <Input />
        </div>
    )
}

export default Header;