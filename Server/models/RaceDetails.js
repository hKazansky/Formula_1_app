const { model, Schema } = require("mongoose");

const schema = new Schema({
  season: { type: String },
  round: { type: String },
  RaceTable: { type: Object },
});

module.exports = model("RaceDetails", schema);
