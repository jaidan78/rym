import React, { useState } from "react";
import style from "./SearchBar.module.css";

const { container4, search, boton } = style;

// MOCKDATA acá va el llamado a una API o base de datos
// const example = {
//    name: 'Rick Sanchez',
//    species: 'Human',
//    gender: 'Male',
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

export default function SearchBar({ onSearch }) {
  const [id, SetId] = useState("");

  const handleChange = (event) => {
    SetId(event.target.value);
  };

  const handleClick = () => {
    onSearch(id);
  };

  return (
    <>
      <div className={container4}>
        <input
          type="search"
          className={search}
          placeholder="id..."
          onChange={handleChange}
          value={id}
        />
        <button className={boton} onClick={handleClick}>
          Search
        </button>
      </div>
    </>
  );
}
