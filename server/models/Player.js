const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  tournamentId: {
    type: String,
    require: true
  },
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
  team: [{ type: Schema.Types.ObjectId, ref: "golfer" }]
});

module.exports = Player = mongoose.model("player", playerSchema);
