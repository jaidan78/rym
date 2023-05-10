import style from './Card.module.css';
import { Link } from 'react-router-dom'

const { card, head, boton, divCaja, caja, img, nombre, especie, genero, caracteristicas, link } = style;

export default function Card({ onClose, id, image, name , species, gender }) {
   return (
      <div className={card}>
         <div className={head}>
            <button className={boton}  onClick={() => {onClose(id)}}>X</button>
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
