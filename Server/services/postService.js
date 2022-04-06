const Post = require("./../models/Post.js");
const Comment = require("./../models/Comment.js");

const { getAllComments } = require("./commentService.js");

async function createPost(data) {
  const post = new Post(data);

  return post.save();
}

async function getAllPosts() {
  const posts = await Post.find({}).populate("author").lean();

  return posts;
}

async function getUserPosts(userId) {
  const posts = await Post.find({ author: { author: userId } });

  return posts;
}

async function getPostById(postId) {
  const post = await Post.findById(postId);
  return post;
}

async function editPost(data, postId) {
  const post = await Post.findById(postId);

  const editedObject = Object.assign(post, data);

  return editedObject.save();
}

async function deletePost(postId) {
  await Comment.deleteMany({ post: { _id: postId } });

  const deletedPost = await Post.deleteOne({ _id: postId });
  return deletedPost;
}

// async function getAllComments(postId) {
//   const commentsForPublication = await Post.findById(postId).populate('comments');
//   return commentsForPublication.comments;
// }
module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getUserPosts,
  editPost,
  deletePost,
  // getAllComments,
};
