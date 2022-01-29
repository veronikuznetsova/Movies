import React, { useState } from "react";
import Tabs from "./components/Tabs";
import styles from './style.module.scss';
import { Link } from "react-router-dom";

const Header = (props) => {

    const [query, setQuery] = useState('');

    let onChange = (event) => {
        setQuery(event.target.value);
      }
    let onClick = () => {
        setQuery('')
    }

    return(
        <header className={styles.header} >
            <Tabs />
            <form className={styles.form}>
         <input type="text" placeholder="Search" label='query' value={query || ''} onChange={onChange} className={styles.input}></input>
         <Link to= {"/search/:"+`${query}`} className={styles.link} >
         <button type="submit" className={styles.button} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </button>
         </Link>
         </form>
        </header>
    )
}

export default Header;