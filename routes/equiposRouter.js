const express = require("express");
const router = express.Router();

const equipos = require("../models/equipos");

router.get("/", (req, res) => {
  res.json(equipos);
});

router.get("/masgoles", (req, res) => {
    
    res.json(equipos);
  });

module.exports = router;
