import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import style from './Nav.module.css'
import { Link } from 'react-router-dom'

const { container, boton } = style;

const Nav = ({onSearch}) =>{
    return(
        <div className={container} >
            <Link to={'/about'}><button className={boton} >About</button></Link>
            <Link to={'/home'}><button className={boton} >Home</button></Link>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}

export default Nav;
