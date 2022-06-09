import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Actividades = db.define(
  "actividades",
  {
    idactividad: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    actividad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    idusuario: {
      type:DataTypes.BIGINT,
      allowNull:false
    },
  },
  {
    timestamps: false,
  }
);

export default Actividades;
