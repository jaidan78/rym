import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../card/Card';
import style from './Favorites.module.css';
import { filterCards, orderCards } from '../../redux/actions/actions';

function Favorites({myFavorites}) {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(true);
  }
  
  const handleFilter = (e) =>{
    dispatch(filterCards(e.target.value));
  }

   return (
    <>
      <div className={style.barSelector}>
        <select name='order' className={style.selector} onChange={handleOrder}>
            <option value='A'>Ascendente</option>
            <option value='D'>Descendente</option>
        </select>
        <select name='filter' className={style.selector} onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.container} >
        {myFavorites?.map(({id, name, species, image, gender}) => {
            return (
                <div className={style.container} >
                    <Card key={id} id={id} name={name}
                        species={species} gender={gender} image={image}
                    />
                </div>
            )
        })}
       </div>
    </>
   );
};

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
 }

 export default connect(mapStateToProps, null)(Favorites);