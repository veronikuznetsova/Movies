import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import styles from './style.module.scss'

const Main = (props) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes()
    },[])

    const getRecipes = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=66eb3bde9cca0487f03e78b512b451e4`
        );
        const data = await response.json()
        setRecipes(data.results)
        console.log(data.results)
    }
      
    return(
        <main className={styles.main}>
        {recipes.map(movie => (
          <Movie
            key={movie.title}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            alt={movie.alt}
          />
        ))}
      </main>
    )
}

export default Main;