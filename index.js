// const express = require("express");
import express from "express";
import cors from "cors";
import ruta from "./routes/rutas.js";
import db from "./config/db.js";
// const ruta= require("./routes/rutas")

const app = express();
const port = 3000;



app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

try {
  await db.authenticate;
} catch (err) {
  console.error(err);
}
app.use('/api/',ruta);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
