const axios = require("axios");
// const express = require('express');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    let { id } = req.params;
    const { status, name, species, origin, image, gender } = await axios.get(
      URL + id
    ).data;
    const data = await response.data;
    const character = {
      id,
      status,
      name,
      species,
      origin,
      image,
      gender,
    };

    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;
