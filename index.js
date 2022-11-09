const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Tu es fort 👍</h1>");
});

app.listen(3900, () => {
  console.log("le serveur tourne sur http://localhost:3900");
});
