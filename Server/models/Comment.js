const { Schema, model } = require("mongoose");

const schema = new Schema({
  comment: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  likes: [{type: Schema.Types.ObjectId, ref: "User"}],
  dislikes: [{type: Schema.Types.ObjectId, ref: "User"}]
});

module.exports = model("Comment", schema);
