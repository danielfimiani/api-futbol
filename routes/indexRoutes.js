const express = require("express");
const router = express.Router();

router.use("/figuras", require("./figurasRouter"));

router.use("/equipos", require("./equiposRouter"));

router.use("/jugadores", require("./jugadoresRouter"));

router.use("/partidos", require("./partidosRouter"));

router.get("/", (req, res) => {
  res.json({
    Respuesta: "hola home",
  });
});

module.exports = router;
