const express = require("express");
const Bus = require("../models/bus");
const busRouter = express.Router();

//send List of buses
busRouter.get("/", async (req, res) => {
  try {
    const buses = await Bus.find({});
    if (buses) {
      res.status(200).send({ status: "success", buses });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({ status: "something went wrong" });
  }
});

module.exports = busRouter;
