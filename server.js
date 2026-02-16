const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let produtos = [];

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.post("/produtos", (req, res) => {
  produtos.push(req.body);
  res.sendStatus(201);
});

app.listen(3000, () =>
  console.log("Servidor rodando 🚀")
);
