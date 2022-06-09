import Actividad from "../models/actividades.model.js";

export const getActividades = async (req, res) => {
  try {
    const actividad = await Actividad.findAll({
      where: {
        idusuario: 1,
      },
    });
    res.send(actividad);
  } catch (err) {
    console.log(err);
  }
};

export const getActividad = async (req, res) => {
  try {
    const actividad = await Actividad.findAll({
      where: {
        idusuario: 1,
        idactividad: req.params.idactividad,
      },
    });
    res.send(actividad);
  } catch (err) {
    console.log(err);
  }
};

export const createActividad = async (req, res) => {
  Actividad.create(req.body)
    .then(() => res.send({ message: "Registo de Actividad exitoso" }))
    .catch((err) => {
      res.status(500).send("Fallo el registor" + err);
    });
};

export const updateActividad = async (req, res) => {
  Actividad.update(req.body, {
    where: { idactividad: req.params.idactividad },
  })
    .then(() => res.send({ message: "Actualizacion de Actividad exitoso" }))
    .catch((err) => {
      res.status(500).send("Fallo la actualizacion de actividad" + err);
    });
};

export const deleteActividad = (req, res) => {
  Actividad.destroy({
    where: { idactividad: req.params.idactividad },
  })
    .then(() => res.send({ message: "Se elimina la Actividad exitosamente" }))
    .catch((err) => {
      res.status(500).send("Fallo la actualizacion de actividad" + err);
    });
};
