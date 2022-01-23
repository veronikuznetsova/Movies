import React, { useEffect, useState } from "react";
import './index.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from "../../../../../../redux/actions/favouriteMovie";
import axios from "axios";

const FavouriteMovie = (props) => {
  const dispatch = useDispatch();
  const [favmovie, setFavMovie] = useState({});
  const active = useSelector((store) => store.favourite.items.find(item => item === props.id));

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/' + `${props.id}` + '?api_key=66eb3bde9cca0487f03e78b512b451e4&external_source=imdb_id').then(
      ({ data }) => {
        setFavMovie(data)
        window.scrollTo(0, 0)
      }
    )
  }, [props.id])

  let onClick = (e) => {
    e.preventDefault();
    dispatch(addMovie(props.id))

    if (active) {
      dispatch(removeMovie(props.id))
    }
  }

  return (
    <Link to={"/modal/:" + `${props.id}`} id={props.id} className={'movie'} >
      <img src={"https://image.tmdb.org/t/p/w500/" + favmovie.poster_path} alt={favmovie.title} className={'main'} />
      <h1 className={'title'}>{favmovie.title}</h1>
      <div>
        <svg className={active ? 'activeimg' : 'heart'} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
        <p className={'text'}>{favmovie.release_date}</p>
      </div>
    </Link>
  );

};

export default FavouriteMovie;

