const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
    validate: [
      /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$/,
      "Email should be in format: example@example.com and consist only of english characters",
    ],
  },
  fullName: {
    type: String,
    required: [true, "Full name is required!"],
    minlength: [5, "Full name must be atleast 5 characters long"],
  },
  birthday: {
    type: String,
    validate: [/[0-9]+\/[0-9]+\/[0-9]+/, 'Date of birth must be in format dd/mm/yy'],
    minlength: [10, "Date of birth must consist of 10 symbols. E.g. xx/xx/xx"],
  },
  country: {
    type: String,
    required: [true, "Country of residence is required!"],
    minlength: [3, "Country must be atleast 3 characters long"],
  },
  team: {
    type: String,
    minlength: [4, "Team must be atleast 4 characters long"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minlength: [5, "Password must be atleast 5 characters long"],
  },
});

// schema.index(
//   { email: 1 },
//   {
//     unique: true,
//     collation: {
//       locale: "en",
//       strength: 3,
//     },
//   }
// );

module.exports = model("User", schema);
