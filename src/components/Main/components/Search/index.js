import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from './style.module.scss';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Movie from '../Movie';
import Error from "./components/Error";

const BASE_URL= 'https://api.themoviedb.org/3/search/movie?api_key=66eb3bde9cca0487f03e78b512b451e4'

const Search = () => {

  const { query } = useParams();
  const newQuery = query.slice(1);

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);
    const [error, setError] = useState('false');
    const [results, setResults] = useState();

    useEffect(() => {
      axios.get(BASE_URL + `&query=${newQuery}`+ `&page=${page}` ).then(
        ({data}) => {
          if(data.results.length===0) {
            setError('true')
            window.scrollTo(0,0)
          } else {
            setError('false')
            setMovies(data.results)
            setPageQty(data.total_pages)
            setResults(data.total_results)
            window.scrollTo(0,0)
          }
        }
      )
    }, [newQuery, page])

    if (error=='true') {
      return <Link to="/error"><Error/></Link>;
    } else {
      return(
        <main className={styles.search} >
          <div className={styles.results}>Total results: {results}</div>
         <div className={styles.moviesBlock}>
         {movies.map(movie => (
          <Movie
          key={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
          alt={movie.alt}
          id={movie.id}
          />
        ))}
        {!!pageQty && (
          <Pagination 
          className={styles.pagination} 
          variant="outlined" 
          showFirstButton 
          showLastButton 
          count={pageQty}
          page={page}
          size="large"
          onChange={(_, num) => setPage(num)}
        />
        )}
         </div>
      </main>
    )
    }
}

export default Search;