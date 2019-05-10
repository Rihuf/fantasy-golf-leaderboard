const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const Golfer = require("../../models/Golfer");
const Player = require("../../models/Player");

/*********************************************************
route:         GET /player
description:   get all players
**********************************************************/
router.get("/", async (request, response) => {
  try {
    const players = await Player.find().populate("player");
    response.json(players);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server Error (from player.js)");
  }
});

/*********************************************************
route:         POST /player
description:   Add or Update a player
**********************************************************/
router.post(
  "/",
  [
    check("playerId", "Player ID is required")
      .not()
      .isEmpty(),
    check("firstName", "First Name is required")
      .not()
      .isEmpty(),
    check("lastName", "Last Name is required")
      .not()
      .isEmpty()
  ],
  async (request, response) => {
    const errors = validationResult(request);
    //if errors is not empty, send a 400 reponse with the error description
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { playerId, firstName, lastName, teams, date_updated } = request.body;

    try {
      let player = await Player.findOne({ playerId });
      //if player exists, overwrite the entry
      if (player) {
        response
          .status(400)
          .json({ errors: [{ msg: "Player already exists" }] });
        // update the player
      }
      //if player does not exist, create the entry
      else {
        player = new Player({
          playerId,
          firstName,
          lastName,
          teams,
          date_updated
        });

        await player.save();

        //to ensure my Postman POST request to /api/player is sending currectly
        console.log("(from player.js) Request.Body: ", request.body);
        response.send(`(from player.js) New player with ID: ${playerId}`);
      }
    } catch (error) {
      console.error(error.message);
      response.status(500).send("Server Error (from player.js)");
    }
  }
);

/*********************************************************
route:         PUT /player/:id/:tournament/:golfer
description:   Edit and player by adding a golfer to a player's team for a specific tournament
**********************************************************/
router.put("/:id/:tournamentId/:golfer", async (request, response) => {
  try {
    //grab the player's Id from the route parameter
    const player = await Player.findById(request.params.id);
    //grab the tournament Id from the route parameter
    const tournamentId = request.params.tournamentId;
    //grab the golfer's id from the route parameter
    const golferId = await Golfer.findById(request.params.golfer);

    player.teams.forEach(index => {
      if (index.tournamentId == tournamentId) {
        index.roster.unshift(golferId);
      }
    });

    await player.save();

    console.log("(from player.js) Request.Body: ", request.body);
    response.send(`(from player.js) New golfer added to player : ${player}`);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server Error (from player.js)");
  }
});

module.exports = router;
