const express = require("express");
const router = express.Router();
const model = require("../models/equipos");

const all = async (req, res) => {
  const equipos = await model.get();
  res.json(equipos);
};

const single = async (req, res) => {
  const { id } = req.params;
  const [equipo] = await model.single(id);
  res.json(equipo);
};

router.get("/", all);
router.get("/equipo/:id", single);

module.exports = router;
