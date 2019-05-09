const express = require("express");
const router = express.Router();

const Golfer = require("../../models/Golfer");
const Player = require("../../models/Player");

/*********************************************************
route:         GET /player/id
description:   get a player from myAPI
**********************************************************/
router.get("/:id", async (request, response) => {
  try {
    let playerId = request.params.id;
    let player = await Player.findById({ playerId });
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server Error (from player.js)");
  }

  // response.send("Player route");
});

/*********************************************************
route:         POST /player
description:   add a player to myAPI
**********************************************************/
router.post("/", (request, response) => {
  let newPlayer = new Player({});
  let newPlayerId = newPlayer._id;
  if (Player.findById({ newPlayerId })) response.send("Player route");
});

module.exports = router;
