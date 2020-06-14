const express = require("express");
const Bus = require("../models/bus");
const User = require("../models/user");
const mongoose = require("mongoose");
const busRouter = express.Router();
const AuthFunction = require("../middleware/authFunction");
//send List of buses
busRouter.get("/", async (req, res) => {
  try {
    const buses = await Bus.find({});
    if (buses) {
      res.status(200).send({ status: "success", buses });
      // console.log(buses);
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({ status: "something went wrong" });
  }
});

//sendCurrentBus
busRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const bus = await Bus.findById(mongoose.Types.ObjectId(id));
    if (bus) {
      res.status(200).send({ status: "success", bus });
      //console.log(bus);
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({ status: "something went wrong" });
  }
});

///book a Seat in a bus

busRouter.post("/book", AuthFunction, async (req, res) => {
  const { userId } = req;
  const { busId, sSeats } = req.body;
  // console.log(sSeats);
  if (userId && busId) {
    try {
      const allSeatsRes = await Bus.findById(
        mongoose.Types.ObjectId(busId)
      ).select("seats");
      const allSeats = allSeatsRes.seats;

      if (allSeats) {
        const newSeats = allSeats.map(seat => {
          if (sSeats.includes(seat.sNumber)) {
            seat.available = false;
            return seat;
          } else return seat;
        });
        //  console.log(newSeats);
        const update = await Bus.findByIdAndUpdate(
          mongoose.Types.ObjectId(busId),
          { seats: newSeats }
        );
        if (update) {
          const userData = await User.findById(userId);
          const existingTickets = userData.tickets;
          console.log("existing", existingTickets);
          const newTickets = [...existingTickets, { busId, sSeats }];
          console.log("newTickets", newTickets);
          const userUpdate = await User.findByIdAndUpdate(userId, {
            tickets: newTickets
          });
          res
            .status(200)
            .send({ status: "success", user: userUpdate, data: update });
        } else {
          res.status(500).send({ status: "failed to update selected seats" });
        }
      } else {
        res.status(500).send({ status: "Failed to fetch data from DB" });
      }
    } catch (e) {
      console.error(e.message);
      res.status(500).send({ status: "something went wrong" });
    }
  } else {
    res.status(400).send({ status: "unauthorized" });
  }
});

module.exports = busRouter;
