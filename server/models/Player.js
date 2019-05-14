const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  playerId: {
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
  scoresByRound: {
    masters: Array,
    open: Array,
    pga: Array,
    usopen: Array
  },
  scoreTotals: {
    masters: Array,
    open: Array,
    pga: Array,
    usopen: Array
  },
  teams: [
    {
      tournamentName: String,
      roster: [{ type: Schema.Types.ObjectId, ref: "golfer" }]
    }
  ],
  date_updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Player = mongoose.model("player", playerSchema);
