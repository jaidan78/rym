const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.writeHead(200, { "Content-Type": "application/json" });

    const { url } = req;

    if (url.toString().includes("/rickandmorty/character/")) {
      const id = Number(url.toString().split("/").pop());
      const character = data[id - 1];
      res.end(JSON.stringify(character));
    }
  })
  .listen(3001, "localhost");
