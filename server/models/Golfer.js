const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const golferSchema = new Schema({
  golferId: {
    type: String,
    require: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  tournaments: {
    masters: {
      today: String,
      thru: String,
      current_round: String,
      scores: {
        round1: String,
        round2: String,
        round3: String,
        round4: String
      }
    },
    pga: {
      today: String,
      thru: String,
      current_round: String,
      scores: {
        round1: String,
        round2: String,
        round3: String,
        round4: String
      }
    },
    usopen: {
      today: String,
      thru: String,
      current_round: String,
      scores: {
        round1: String,
        round2: String,
        round3: String,
        round4: String
      }
    },
    open: {
      today: String,
      thru: String,
      current_round: String,
      scores: {
        round1: String,
        round2: String,
        round3: String,
        round4: String
      }
    }
  },
  date_updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Golfer = mongoose.model("golfer", golferSchema);
