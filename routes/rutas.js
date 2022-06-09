import express from "express";

import {
  getActividades,
  createActividad,
  updateActividad,
  deleteActividad,
} from "../controllers/actividades.controller.js";


const ruta=express.Router();

ruta.get('/actividades',getActividades);
ruta.post('/crear-actividad',createActividad);
ruta.post('/actualizar-actividad',updateActividad);
ruta.post('/eliminar-actividad',deleteActividad);

export default ruta;