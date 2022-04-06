const { model, Schema } = require("mongoose");

const schema = new Schema({
  season: { type: String },
  StandingsLists: { type: Array },
});

module.exports = model("Constructors", schema);
