import React, { useState } from "react";
import style from "./Aleatorio.module.css";

const Aleatorio = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleClick = () => {
    setId(Math.floor(Math.random() * (826 - 1) + 1));
    onSearch(id);
  };

  return (
    <button className={style.boton} onClick={handleClick}>
      Random
    </button>
  );
};

export default Aleatorio;
