const axios = require("axios");

const getCharbyId = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const { name, gender, species, origin, image, status } = data;
      const character = { id, name, gender, species, origin, image, status };
      res.writeHead(200, { "Contain-type": "application/json" });
      return res.end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(500, { "Contain-type": "text/plain" });
      return res.end(err.message);
    });
};

module.exports = getCharbyId;
