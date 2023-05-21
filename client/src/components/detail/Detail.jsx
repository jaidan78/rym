import React, { useState, useEffect } from "react";
import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const { container, title, leyenda, photo } = style;

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    //
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={container}>
      <div>
        <h1 className={title}>{character.name}</h1>
        <h1 className={leyenda}>Status: {character.status}</h1>
        <h1 className={leyenda}>Gender: {character.gender}</h1>
        <h1 className={leyenda}>Specie: {character.species}</h1>
        <h1 className={leyenda}>Origin: {character.origin?.name}</h1>
      </div>

      <img className={photo} src={character.image} alt="foto" />
    </div>
  );
};

export default Detail;
