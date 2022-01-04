import React from "react";
import styles from './style.module.scss';
import Heart from '../../../../images/heartBlack.svg'

const Movie = ({ title, release_date, poster_path }) => {
  return (
    <div className={styles.movie}>
        <img src={"https://image.tmdb.org/t/p/w500/"+poster_path} alt={title} className={styles.main}/>
        <h1>{title}</h1>
        <div>
            <img src={Heart} className={styles.heart} />
        <p>{release_date}</p>
        </div>
    </div>
  );
};
export default Movie;