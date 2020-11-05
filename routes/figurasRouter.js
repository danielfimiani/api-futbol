const express = require("express");
const router = express.Router();

const figuras = require("../models/figuras");

router.use("/", (req, res) => {
  res.json(figuras);
});

module.exports = router;
