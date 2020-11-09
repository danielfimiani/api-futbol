const express = require("express");
const router = express.Router();
const model = require("../models/partidos");

const all = async (req, res) => {
  const partidos = await model.get();
  res.json(partidos);
};

const single = async (req, res) => {
  const { id } = req.params;
  const [partido] = await model.single(id);
  res.json(partido);
};

const ByDate = async (req, res) => {
  const { fec_desde, fec_hasta } = req.params;
  const partidos = await model.ByDate(fec_desde, fec_hasta);
  res.json(partidos);
};

const ultimoPartido = async (req, res) => {
  const [partido] = await model.ultimoPartido();
  res.json(partido);
};

const create = async (req, res) =>
  model
    .newPartido(req.body)
    .then((response) => res.redirect("/api-futbol/partidos/ultimopartido"))
    .catch((e) => res.render("error"));

const puntosbyDate = async (req, res) => {
  const { fec_desde, fec_hasta } = req.params;
  const equipos = await model.puntosbyDate(fec_desde, fec_hasta);
  res.json(equipos);
};

const masGoles = async (req, res) => {
  const equipos = await model.masGoles();
  res.json(equipos);
};

router.get("/", all);
router.get("/partido/:id", single);
router.get("/ultimoPartido", ultimoPartido);
router.get("/partidosporfecha/:fec_desde/:fec_hasta", ByDate);
router.get("/newpartido", (req, res) => {
  res.render("form");
});
router.get("/maspuntos/:fec_desde/:fec_hasta", puntosbyDate);
router.get("/masgoles", masGoles);
router.post("/newpartido", create);

module.exports = router;
