const express = require("express");
require("../config/dbconnect");
const { generateHashSynch, compareHash } = require("../utils/pwdHash");
const { tokenGenerator } = require("../utils/jwtToken");
const User = require("../models/user");
const Bus = require("../models/bus");
const AuthFunction = require("../middleware/authFunction");
const userRouter = express.Router();

//get currentUser Details Route
userRouter.get("/", AuthFunction, async (req, res) => {
  if (req.userId) {
    try {
      const currentUser = await User.findById(req.userId)
        .select("-passwordHash")
        .populate({
          path: "tickets",
          populate: {
            path: 'busId',
            model: 'bus'
          }
        });
      if (currentUser) {
        res.status(200).send({ status: "success", user: currentUser });
      } else {
        res.status(500).send({ status: "something went wrong" });
      }
    } catch (e) {
      console.error(e.message);
      res.status(500).send({ status: "something went wrong" });
    }
  } else {
    res.status(400).send({ status: "unauthorized" });
  }
});

//https://q2qpt.sse.codesandbox.io/api/users/login

//signupRoute
userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (name && email && password) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(400).send({ status: "user already exists" });
      } else {
        const newUser = new User({
          name,
          email,
          passwordHash: generateHashSynch(password)
        });

        const result = await newUser.save();

        if (result) {
          res
            .status(200)
            .send({ status: "success", token: tokenGenerator(result._id) });
        } else {
          res.status(500).send({ status: "something went wrong" });
        }
      }
    } else {
      res.status(400).send({ status: "unauthorized" });
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send({ status: "something went wrong" });
  }
});

//loginRoute
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("login Route accessed");
  try {
    if (email && password) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        const pwdMatch = await compareHash(password, existingUser.passwordHash);
        if (pwdMatch) {
          res.status(200).send({
            status: "success",
            token: tokenGenerator(existingUser._id)
          });
        } else {
          res.status(400).send({ status: "password incorrect" });
        }
      } else {
        res.status(400).send({ status: "unauthorized" });
      }
    } else {
      res.status(400).send({ status: "unauthorized" });
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send({ status: "something went wrong" });
  }
});

module.exports = userRouter;
