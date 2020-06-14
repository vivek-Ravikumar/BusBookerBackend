const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const BusSchema = new Schema({
  busName: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  seats: [
    {
      sNumber: { type: String },
      available: { type: Boolean }
    }
  ]
});

const Bus = model("bus", BusSchema);

module.exports = Bus;
