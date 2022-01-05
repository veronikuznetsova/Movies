import React, { useEffect, useState } from "react";
import Movie from "../Main/components/Movie";
import styles from './style.module.scss';
import { searchMovie } from "../../redux/actions/search";

const Search = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
    },[])

    useEffect(() => {
      getMovies()
    },[query])

    const getMovies = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/company?api_key=66eb3bde9cca0487f03e78b512b451e4&query=${query}`
        );
        const data = await response.json()
        setMovies(data.results)
        console.log(data.results)
    }
      
    return(
        <main className={styles.main}>
        {movies.map(movie => (
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

export default Search;