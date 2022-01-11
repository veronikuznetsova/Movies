import React, { useEffect, useState } from "react";
import styles from './style.module.scss';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Simular = () => {
  const { id } = useParams();
  const newId = id.slice(1);

  const [simular, setSimular] = useState([]);

  useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/'+`${newId}`+'/similar?api_key=66eb3bde9cca0487f03e78b512b451e4').then(
        ({data}) => {
          setSimular(data.results)
        }
      )
  }, [id])

  
  return (
    <div className={styles.modal} >
       {simular.map(movie => (
           <Link to= {"/modal/:"+`${movie.id}`} key={movie.id} id={movie.id} className={styles.item}>
                <img src={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path} alt={movie.title} className={styles.img} />
                <p>{movie.title}</p>
            </Link>
        ))}
    </div>
  );
};
export default Simular;

