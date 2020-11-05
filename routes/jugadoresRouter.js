const express = require("express");
const router = express.Router();

const jugadores = require("../models/jugadores");

router.use("/", (req, res) => {
  res.json(jugadores);
});

module.exports = router;
