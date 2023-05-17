const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const UserName = mongoose.model("User", User);

module.exports = UserName;
