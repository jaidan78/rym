const axios = require('axios');
const express = require('express');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharbyId = (req, res) =>{
  const id = req.params.id;
  axios.get(`URL${id}`)
  .then (({ data }) => {
    const { status, name, species, origin, image, gender} = data;
    const character =  { id, status, name, species, origin, image, gender }

    if (id){
      res.status(200).json(character)
    } else { 
      res.status(404).send("Not found")
    }
  }) 
  .catch((error) => {
    res.status(500).json({message: "error"})
  })  
};

module.exports = getCharbyId;
