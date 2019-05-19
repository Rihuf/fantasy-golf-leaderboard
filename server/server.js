const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const keys = require("./config/keys");
var request = require("request");
var CronJob = require("cron").CronJob;

mongoose.connect(keys.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const playerRoutes = require("./routes/player");
const golferRoutes = require("./routes/golfer");

app.use("/player", playerRoutes);
app.use("/golfer", golferRoutes);

var callPGAData = new CronJob("*/60 * * * * *", function() {
  console.log("how often?");
  // request("http://localhost:5000/golfer/get_pga_data");
  request("https://the-salisbury-open.herokuapp.com/golfer/get_pga_data");
});

// callPGAData.start();

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Node.js listening on process.env.PORT or port " + 5000);
});
