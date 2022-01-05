import React from "react";
import Input from "./components/Input";
import Tabs from "./components/Tabs";
import styles from './style.module.scss';

const Header = (props) => {
    return(
        <header className={styles.header} query={props.query}>
        <Tabs />
        <Input query={props.query}/>
        </header>
    )
}

export default Header;