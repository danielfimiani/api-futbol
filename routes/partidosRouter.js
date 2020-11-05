const express = require("express");
const equipos = require("../models/equipos");
const router = express.Router();

const partidos = require("../models/partidos");

router.get("/", (req, res) => {
  res.json(partidos);
});

router.get("/ultimoPartido", (req, res) => {
  let aux_partido = partidos.find((aux_partido) => aux_partido.id_partido == partidos.length);
  res.json(aux_partido);
});

router.get("/singlePartido/:id", (req, res) => {
  const { id } = req.params;
  let aux_partido = partidos.find((aux_partido) => aux_partido.id_partido == id);
  res.json(aux_partido);
});

router.get("/newpartido", (req, res) => {
  res.render("form");
});

router.post("/newpartido", (req, res) => {
  const nombre_equipo = req.body.nombre_equipo;
  const gol_local = req.body.gol_local;
  const gol_visitante = req.body.gol_visitante;
  const puntaje = req.body.puntaje;

  console.log(nombre_equipo, gol_local, gol_visitante, puntaje);
  res.json([{ id_equipo: 6 }]);
});

module.exports = router;
