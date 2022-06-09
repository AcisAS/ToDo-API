import express from "express";

import {
  getActividad,
  getActividades,
  createActividad,
  updateActividad,
  deleteActividad,
} from "../controllers/actividades.controller.js";

const ruta = express.Router();

ruta.get("/actividades/:idactividad", getActividad);
ruta.get("/actividades", getActividades);
ruta.post("/crear-actividad", createActividad);
ruta.put("/actualizar-actividad/:idactividad", updateActividad);
ruta.delete("/eliminar-actividad/:idactividad", deleteActividad);

export default ruta;
