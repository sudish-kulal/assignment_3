const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});

const userRoute = require("./src/routes/user.route.js");

app.use("/user", userRoute);

module.exports = app;
