const { model, Schema } = require("mongoose");

const schema = new Schema({
  season: { type: String },
  round: { type: String },
  StandingsLists: { type: Array },
});

module.exports = model("RaceDetails", schema);
