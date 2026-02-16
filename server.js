require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pix = require("./pix");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/pix", pix);

app.listen(3000, () =>
  console.log("Servidor Pix rodando 🚀")
);
