import { Pagination, PaginationItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import styles from './style.module.scss';
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import Input from './components/Input';

const BASE_URL= 'https://api.themoviedb.org/3/discover/movie?api_key=66eb3bde9cca0487f03e78b512b451e4'

const Main = (props) => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);

    useEffect(() => {
        axios.get(BASE_URL + `&page=${page}`).then(
        ({data}) => {
          setMovies(data.results)
          setPageQty(data.total_pages)
        }
      )
    }, [page])
        
    return(
        <main className={styles.main}>
        {movies.map(movie => (
          <Movie
            key={movie.title}
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
          color="primary"
          size="large"
          onChange={(_, num) => setPage(num)}
          renderItem={
            (item) => (
              <PaginationItem
              className={styles.item}
              component={Link}
              to={`/main/?page=${item.page}`}
              {...item}
              />
            )
          }
          />
        )}
      </main>
    )
}

export default Main;

