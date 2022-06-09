const jwt = require("jsonwebtoken");

exports.validarToken = async function (req, res, next) {
  const token = await req.headers.authorization;
  if (!token) return res.status(401).json("Acceso denegador");
  const payload = await jwt.verify(
    token,
    process.env.TOKEN_SECRET || "Tokenimage"
  );

  req.usuarioId = payload._id;
  next();
};
