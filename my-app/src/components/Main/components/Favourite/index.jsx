import React, { useEffect, useState } from "react";
import styles from './style.module.scss';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Favourite = (props) => {
  const active = useSelector((store) => store.favourite.items.find(item => item == props.id))

      return(
          <Link to= {"/modal/:"+`${props.id}`} id={props.id} className={'movie'}>
        <img src={"https://image.tmdb.org/t/p/w500/"+props.poster_path} alt={props.title} className={'main'}/>
        <h1 className={'title'}>{props.title}</h1>
        <div>
            <svg className={active ? 'activeimg' : 'heart'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        <p className={'text'}>{props.release_date}</p>
        </div>
    </Link>
    )
}

export default Favourite;