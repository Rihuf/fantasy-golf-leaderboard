const express = require("express");
const router = express.Router();
const axios = require("axios");
const { check, validationResult } = require("express-validator/check");

//Bring in the golfer model
const Golfer = require("../models/Golfer");

/*********************************************************
route:         POST /golfer
description:   add a golfer to my api
**********************************************************/
router.post(
  "/",
  [
    check("golferId", "Golfer ID is required")
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

    const {
      golferId,
      firstName,
      lastName,
      tournaments,
      date_updated
    } = request.body;

    try {
      let golfer = await Golfer.findOne({ golferId });
      //if golfer exists, overwrite the entry
      if (golfer) {
        response
          .status(400)
          .json({ errors: [{ msg: "Golfer already exists" }] });
        // update the golfer
      }
      //if golfer does not exist, create the entry
      else {
        golfer = new Golfer({
          golferId,
          firstName,
          lastName,
          tournaments,
          date_updated
        });

        //reminder: anything that returns a promise, I need to put await preface with "await"
        await golfer.save();

        //to ensure my Postman POST request to /api/golfer is sending currectly
        console.log("(from golfer.js) Request.Body: ", request.body);
        response.send(`(from golfer.js) New golfer with ID: ${golferId}`);
      }
    } catch (error) {
      console.error(error.message);
      response.status(500).send("Server Error (from golfer.js)");
    }
  }
);

/*********************************************************
route:         PUT /golfer/:id/:tournament
description:   Edit a golfer's scores according to tournament name
**********************************************************/
router.put("/:id/tournament/:tournamentName", async (request, response) => {
  //if errors is not empty, send a 400 reponse with the error description
  const golfer = await Golfer.findById(request.params.id);
  const tournamentName = request.params.tournamentName;

  try {
    golfer.tournaments[tournamentName] = request.body;
    await golfer.save();
    return response.json(golfer);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server Error (from player.js)");
  }
});

// router.get("/get_masters_data", async (request, response, next) => {
//   axios
//     .get("https://statdata.pgatour.com/r/014/leaderboard-v2mini.json")
//     .then(res => {
//       console.log(res.data.leaderboard.players);
//       const players = res.data.leaderboard.players;
//       response.send(res.data.leaderboard);

//       try {
//         players.map(index => {
//           let golfer = Golfer.findOne({
//             golferId: index.player_id
//           });
//         });
//       } catch (error) {
//         console.error(error.message);
//         response.status(500).send("Server Error (from player.js)");
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

module.exports = router;
