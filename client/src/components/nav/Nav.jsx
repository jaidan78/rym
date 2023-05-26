import React from "react";
import SearchBar from "../searchBar/SearchBar";
import Aleatorio from "../random/Aleatorio";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

const { container, boton } = style;

const Nav = ({ onSearch }) => {
  return (
    <div className={container}>
      <Link to={"/home"}>
        <button className={boton}>Home</button>
      </Link>
      <Link to={"/favorites"}>
        <button className={boton}>Favorites</button>
      </Link>
      <Aleatorio onSearch={onSearch} />
      <Link to={"/about"}>
        <button className={boton}>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
