const express = require("express");
const hbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
// const authMiddleware = require("./../services/authService.js");

module.exports = (app) => {
  app.engine(
    "hbs",
    hbs.engine({
      extname: "hbs",
    })
  );
  app.set("view engine", "hbs");
  app.use(express.json());
  
  app.use("/static", express.static("static"));
  app.use(cookieParser());
  // app.use(authMiddleware());
};
