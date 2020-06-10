const express = require("express");

const busRouter = express.Router();

busRouter.get("/", (req, res) => {
  res.send("from bus Router");
});

module.exports = busRouter;
