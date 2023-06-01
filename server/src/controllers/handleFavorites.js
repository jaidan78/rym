const express = require('express');

let myFavorites = [];

const postFav = (req, res) =>{
    myFavorites.push(req.body);
    res.json(myFavorites);
}

const deleteFav = (req, res) =>{
    const id = req.params.id;
    myFavorites = myFavorites.filter((item) => item.id !== id);
    res.json(myFavorites);
}

module.exports = postFav, deleteFav;