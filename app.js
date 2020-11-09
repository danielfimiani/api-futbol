"use strict";
var path = require("path");
// requires
const express = require("express");
const bodyparser = require("body-parser");
const open = require("open");
//var mysql = require("mysql");
require("dotenv").config();

// ejecutar express
const app = express();

//Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//fichero de rutas
const indexRouter = require("./routes/indexRoutes");

// Middlewares
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Statics
//app.use(express.static("./public/common"));
//app.use(express.static("./views/styles"));

//ROUTER
app.use("/api-futbol", indexRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}/api-futbol`);
});
