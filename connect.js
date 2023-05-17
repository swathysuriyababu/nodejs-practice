const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};
const hello = () => {
  console.log("hello");
};
module.exports = { connect, hello };
