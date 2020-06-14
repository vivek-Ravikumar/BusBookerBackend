const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  tickets: [
    {
      busId: { type: Schema.Types.ObjectId, ref: "Bus" },
      sSeats: []
    }
  ]
});

const User = model("user", UserSchema);
module.exports = User;
