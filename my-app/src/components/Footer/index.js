import React from "react";
import styles from './style.module.scss';

const Footer = () => {
    return(
        <footer className={styles.footer}> © 2022
                <a href="https://github.com/veronikuznetsova" className={styles.github}>veronikuznetsova</a>
        </footer>
    )
}

export default Footer;