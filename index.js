const express = require("express");
const dotenv = require("dotenv");
const { connect, hello } = require("./connect");
const UserName = require("./models/User");
dotenv.config();
var app = express();
connect();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/hello", (req, res) => {
  res.send("new route");
});

app.post("/", async (req, res) => {
  const newUser = new UserName({
    username: "swathy",
    age: 27,
  });
  try {
    const saveduser = await newUser.save();
    res.status(200).json(saveduser);
  } catch (err) {
    res.status(500).json(err);
  }

  //   try {
  //     const savedHall = await newHall.save();
  //     res.status(200).json(savedHall);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("listening to port 4000");
});

//const vs var vs let
//get
