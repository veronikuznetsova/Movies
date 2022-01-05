import React, { useState } from "react";
import styles from './style.module.scss';

const Input = (props) => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState("");

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);;
        setSearch('');
    }

    return(
         <form className={styles.form} onSubmit={getSearch} query={props.query}>
         <input type="text" placeholder="Search" className={styles.input} onChange={updateSearch}></input>
         <button type="submit" className={styles.button}></button>
         </form>
    )
}

export default Input;