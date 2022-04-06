const User = require("./../models/User.js");

function getUserByEmail(email) {
  let pattern = new RegExp(`^${email}$`, "i");

  const user = User.findOne({ email: { $regex: pattern } }).lean();

  return user;
}

function getUserByUsername(username) {
  let pattern = new RegExp(`^${username}$`, "i");

  const user = User.findOne({ username: { $regex: pattern } }).lean();

  return user;
}

function getUserById(id) {
  return User.findById(id).lean();
}

function createUser(userData) {
  const user = new User(userData);

  return user.save();
}

async function getAllUsers() {
  const users = await User.find({});
  return users
}

module.exports = {
  getUserByEmail,
  createUser,
  getUserById,
  getUserByUsername,
  getAllUsers,
};
