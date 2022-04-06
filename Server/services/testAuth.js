// const {TOKEN_SECRET} = require("./../index.js");
const jwt = require("jsonwebtoken");
const jwtSecret = "Super_Secret_Key";

module.exports = () => (req, res, next) => {
  try {
    let token = req.headers["authorization"].split(" ")[1];
    let userData = jwt.verify(token, jwtSecret);
    req.user = userData;
    res.locals.user = userData;

    next();
    return true;
  } catch (error) {
    console.log(error.message);
  }

  next();
};
