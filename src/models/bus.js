const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const BusSchema = new Schema({
  name: {
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
  seats: [
    {
      sNumber: { type: String },
      available: { type: Boolean },
      bookedBy: Schema.Types.ObjectId
    }
  ]
});

const Bus = model("bus", BusSchema);

module.exports = Bus;
