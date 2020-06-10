const express = require("express");
require("../config/dbconnect");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("from User Router");
});

//signupRoute

userRouter.post("/signup", (req, res) => {
  const { body } = req;
  console.log(req.body);
});

module.exports = userRouter;
