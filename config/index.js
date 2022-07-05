
const express = require("express");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const favicon = require("serve-favicon");

const path = require("path");

// Middleware configuration
module.exports = (app) => {
  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());


app.use(express.static(path.join(__dirname, "..", "public")));

  app.set("views", path.join(__dirname, "..", "views"));
  app.set("view engine", "hbs");
 
// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));

// hbs.registerPartials("partials_absolute_path")


  app.use(favicon(path.join(__dirname, "..", "public", "images", "favicon.ico")));
};
