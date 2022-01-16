import React, { useEffect, useState } from "react";
import './index.css';
import { Link, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from "../../../../redux/actions/favouriteMovie";

const Movie = (props) => {
  const dispatch = useDispatch();
  const active = useSelector((store) => store.favourite.items.find(item => item == props.id))

  let onClick = (e) => {
    e.preventDefault();
    dispatch(addMovie(props.id))

    if (active) {
      dispatch(removeMovie(props.id))
    }
  }
  
  return (
    <Link to= {"/modal/:"+`${props.id}`} id={props.id} className={'movie'}>
        <img src={"https://image.tmdb.org/t/p/w500/"+props.poster_path} alt={props.title} className={'main'}/>
        <h1 className={'title'}>{props.title}</h1>
        <div>
            <svg className={active ? 'activeimg' : 'heart'}  onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        <p className={'text'}>{props.release_date}</p>
        </div>
    </Link>
  );

};

export default Movie;

