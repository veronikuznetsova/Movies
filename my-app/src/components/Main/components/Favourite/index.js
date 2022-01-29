import React from "react";
import styles from './style.module.scss';
import { useSelector } from "react-redux";
import FavouriteMovie from "./components/FavouriteMovie";


const Favourite = (props) => {

  const items = useSelector(function(state){
    return state.favourite.items
  });
  
  if(items.length===0){
    return(
      <div className={styles.favourite}>
        <div className={styles.favText}>Add your favorite movie</div>
        </div>
    )
  } else{
    return(
      <div className={styles.favourite}>
      {items.map(item => (
         <FavouriteMovie
         id={item}
       />
      ))}
     </div>
  )
  }
}

export default Favourite;