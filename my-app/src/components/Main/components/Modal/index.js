import React, { useEffect, useReducer, useState } from "react";
import './index.scss';
import axios from "axios";
import { useParams } from "react-router-dom";
import Simular from "./components/Simular";
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from "../../../../redux/actions/favouriteMovie";
import favouriteReducer from "../../../../redux";

const Modal = (props) => {

  const { id } = useParams();
  const newId = +id.slice(1);
  const [movie, setMovie] = useState({});
  const dispatch = useDispatch();
  const active = useSelector((store) => store.favourite.items.find(item => item === newId)); 

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/' + `${newId}` + '?api_key=66eb3bde9cca0487f03e78b512b451e4&external_source=imdb_id').then(
      ({ data }) => {
        setMovie(data)
        window.scrollTo(0, 0)
      }
    );
  }, [newId, active])

  let onClick = (e) => {
    e.preventDefault();
    dispatch(addMovie(newId))
    if (active) {
      dispatch(removeMovie(newId))
    }
  }

  return (
    <div style={{ backgroundImage: `url(${"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className={'modal'} >
        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} className={'main_modal'} />
        <div className={'common_modal'}>
          <div className={'titleOverview_modal'}>
            <div className={'span_modal_common'}>
              <h1 className={'title_modal'}>{movie.title}</h1>
              <span className={'span_modal'} title={`Based on ${movie.vote_count} votes`}>{movie.vote_average}</span>
            </div>
            <p className={'title_info'}>{movie.tagline}</p>
            <p className={'overview_modal'}>{movie.overview}</p>
          </div>
          <div className={'info_modal'}>
            <svg className={active ? 'activeimg_modal' : 'heart_modal'} onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
            <p className={'data_modal'}>{movie.release_date}</p>
          </div>
        </div>
        <Simular className={'modal'} />
      </div>
    </div>
  );
};
export default Modal;

