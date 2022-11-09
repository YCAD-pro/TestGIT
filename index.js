const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Tu es fort 👍</h1>");
});

app.get("/api", (req, res) => {
  res.json({
    nom: "CADET",
    prenom: "Yannick",
    brand: "SANOFI",
  });
});

app.listen(3900, () => {
  console.log("le serveur tourne sur http://localhost:3900");
});
