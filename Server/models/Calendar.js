const { model, Schema } = require("mongoose");

const schema = new Schema({
  season: { type: String },
  round: { type: String },
  url: { type: String },
  raceName: { type: String },
  Circuit: {
    circuitId: { type: String },
    url: { type: String },
    circuitName: { type: String },
    Location: {
      lat: { type: String },
      long: { type: String },
      locality: { type: String },
      country: { type: String },
    },
  },
  date: { type: String },
  time: { type: String },
  FirstPractice: { date: { type: String }, time: { type: String } },
  SecondPractice: { date: { type: String }, time: { type: String } },
  ThirdPractice: { date: { type: String }, time: { type: String } },
  Sprint: { date: { type: String }, time: { type: String } },
  Qualifying: { date: { type: String }, time: { type: String } },
});

module.exports = model("Calendar", schema);
