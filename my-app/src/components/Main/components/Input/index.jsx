import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from './style.module.scss';


const Input = (props) => {

    return(
        <form className={styles.form}>
        <input type="text" placeholder="Search" label='query' className={styles.input}></input>
        <button type="submit" className={styles.button}></button>
        </form>
    )
}

export default Input;