const Comment = require("../models/Comment.js");
const Post = require("../models/Post.js");

async function createComment(body, postId) {
  const post = await Post.findById(postId);
  const comment = await new Comment(body);

  post.comments.push(comment);
  post.save();
  return comment.save();
}

async function getAllComments() {
  const comments = await Comment.find({}).populate("post").populate("author");
  return comments;
}

async function deleteComment(commentId, postId) {
  const post = await Post.findById(postId);
  const commentToDelete = post.comments.find((x) => x._id == commentId);
  const commentIdx = post.comments.indexOf(commentToDelete);
  post.comments.splice(commentIdx, 1);

  post.save();
  return await Comment.deleteOne({ _id: commentId });
}

async function likeComment(commentId, userId) {
  const comment = await Comment.findById(commentId);
  comment.likes.push(userId);
  comment.save();
}

async function dislikeComment(commentId, userId) {
  const comment = await Comment.findById(commentId);
  comment.dislikes.push(userId);
  comment.save();
}

module.exports = {
  createComment,
  getAllComments,
  deleteComment,
  likeComment,
  dislikeComment,
};
