const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const golferSchema = new Schema({
  tournamentId: {
    type: String,
    require: true
  },
  golferId: {
    type: String,
    require: true
  },
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  thru: {
    type: String,
    require: true
  },
  current_round: {
    type: String,
    require: true
  },
  scores: {
    round1: String,
    round2: String,
    round3: String,
    round4: String
  },
  date_updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Golfer = mongoose.model("golfer", golferSchema);
