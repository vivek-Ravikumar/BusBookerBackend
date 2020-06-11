const express = require("express");
const userRouter = require("./Routers/userRouter");
const busRouter = require("./Routers/busRouter");

const app = express();
app.use(express.json({ extended: false }));
app.use("/api/user", userRouter);
app.use("/api/bus", busRouter);

app.get("/", (req, res) => {
  res.send("Hi from the server");
});

app.listen(3000, () => {
  console.log("server is  up");
});
