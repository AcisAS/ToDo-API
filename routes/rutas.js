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
ruta.delete('/eliminar-actividad/:idactividad',deleteActividad);

export default ruta;