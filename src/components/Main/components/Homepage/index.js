import React from "react";
import styles from './style.module.scss';


const Homepage = () => {

      return(
          <div className={styles.main}>
              <div className={styles.common}>
            <h1 className={styles.h1}>Choose your film: 
                <div className={styles.roller}>
                <span id="rolltext" className={styles.rolltext}>
                    Comedy<br/>
                    Drama<br/>
                    Actions<br/>
                <span id="spare-time" className={styles.spareTime}>Let's go?</span><br/>
                </span>
                </div>
            </h1>
        </div>
          </div>
    )
}

export default Homepage;