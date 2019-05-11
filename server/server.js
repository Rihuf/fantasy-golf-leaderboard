const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb://localhost/TSO", { useNewUrlParser: true });

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const playerRoutes = require("./routes/player");
const golferRoutes = require("./routes/golfer");

app.use("/player", playerRoutes);
app.use("/golfer", golferRoutes);

app.listen(PORT, () => {
  console.log("Node.js listening on port " + 8000);
});
