import style from './Card.module.css';
import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const { card, head, heart, boton, divCaja, caja, img, nombre, especie, genero, caracteristicas, link } = style;

 function Card({ onClose, id, image, name , species, gender, addFav, removeFav, myFavorites }) {
  
   const [isFav, setIsFav] = useState(false);

   // const handleFavorite = (event) => {
   //    event.preventDefault();
   //    if (isFav) {
   //       setIsFav(false);
   //       removeFav(id);
   //    } else {
   //       setIsFav(true);
   //       addFav({ onClose, id, image, name, gender , species});
   //    }
   // }

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ onClose, id, image, name, gender , species});
      setIsFav(!isFav);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={card} key={id}>
         <div className={head}>
            {
               isFav ? (
                  <button className={heart} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button  className={heart} onClick={handleFavorite}>🤍</button>
               )
            }
            {
               isFav ? null:
                  <button className={boton} onClick={() => {onClose(id)}}>X</button>      
            }
         </div>
         <div className={divCaja}>
            <div className={caja}>
               <img className={img} src={image} alt='imagen' />
            </div>
         </div>
         {/* <h2>{props.status}</h2> */}
         <div className={caracteristicas}>
            <Link to={`/detail/${id}`} className={link}>
               <h2 className={nombre} >{name}</h2>
            </Link>
            <h2 className={especie} >{species}</h2>
            <h2 className={genero} >{gender}</h2>
         </div>
         {/* <h2>{props.origin.name}</h2> */}
         {/* <h2>{props.}</h2>
         <h2>{props.}</h2>
         <h2>{props.}</h2>
         <h2>{props.}</h2> */}
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (char)=>{
         dispatch(addFav(char))
      },
      removeFav: (id)=>{
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);