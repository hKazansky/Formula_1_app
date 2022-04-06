const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: { type: String },
  description: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  imageUrl: { type: String, validate: [/https?:\/\//], required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Post", schema);
