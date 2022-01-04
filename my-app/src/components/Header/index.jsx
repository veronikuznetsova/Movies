import React from "react";
import Input from "./components/Input";
import Tabs from "./components/Tabs";
import styles from './style.module.scss';

const Header = () => {
    return(
        <header className={styles.header}>
        <Tabs />
        <Input />
        </header>
    )
}

export default Header;