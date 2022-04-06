const DB_PATH = "Angular-app";

module.exports = {
  PORT: 3000,
  DB_CONNECTION_STRING: `mongodb://localhost:27017/${DB_PATH}`,
  TOKEN_SECRET: "My secret",
  COOKIE_NAME: "TOKEN_SESSION",
};
