const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const golferSchema = new Schema({
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
  tournaments: [
    {
      tournamentId: String,
      thru: String,
      current_round: String,
      scores: {
        round1: String,
        round2: String,
        round3: String,
        round4: String
      }
    }
  ],
  date_updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Golfer = mongoose.model("golfer", golferSchema);
