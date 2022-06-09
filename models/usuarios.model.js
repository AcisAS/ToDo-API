import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Usuario = db.define(
  "usuario",
  {
    idusuario: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidopaterno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidomaterno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Usuario;
