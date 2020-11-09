const express = require("express");
const router = express.Router();
const model = require("../models/jugadores");

const all = async (req, res) => {
  const jugadores = await model.get();
  res.json(jugadores);
};

const single = async (req, res) => {
  const { id } = req.params;
  const [jugador] = await model.single(id);
  res.json(jugador);
};

router.get("/", all);
router.get("/jugador/:id", single);

router.get("/masgoles", (req, res) => {
  res.json(equipos);
});

module.exports = router;
