import React from "react";
import styles from './style.module.scss';

const Input = () => {

    return(
         <form className={styles.form}>
         <input type="text" placeholder="Search" className={styles.input}></input>
         <button type="submit" className={styles.button}></button>
         </form>
    )
}

export default Input;