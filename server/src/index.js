const http = require("http");
const getCharbyId = require("./controllers/getCharById");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // res.writeHead(200, { "Content-Type": "application/json" });

    const { url } = req;

    if (url.toString().includes("/rickandmorty/character/")) {
      const id = Number(url.toString().split("/").pop());
      getCharbyId(res, id);
    }
  })
  .listen(PORT, "localhost");
