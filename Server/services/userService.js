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

async function createUser(userData) {
  const existingUser = await User.findOne({ email: userData.email });

  if (existingUser) {
    throw new Error("Email or password are already taken");
  }

  const user = new User(userData);

  return user.save();
}

async function getAllUsers() {
  const users = await User.find({});
  return users;
}

module.exports = {
  getUserByEmail,
  createUser,
  getUserById,
  getUserByUsername,
  getAllUsers,
};
