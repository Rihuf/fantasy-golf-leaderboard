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
router.post("/", async (request, response) => {
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
      response.status(400).json({ errors: [{ msg: "Golfer already exists" }] });
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
});

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

/*********************************************************
route:         GET /get_masters_data
description:   Get tournament data and update golfer
               scores in my DB accordingly
**********************************************************/
router.get("/get_masters_data", (request, response, next) => {
  axios
    .get("https://statdata.pgatour.com/r/014/leaderboard-v2mini.json")
    .then(res => {
      console.log(res.data.leaderboard.players);
      const players = res.data.leaderboard.players;
      response.send(res.data.leaderboard);

      try {
        players.forEach(index => {
          const firstName = index.player_bio.first_name;
          const lastName = index.player_bio.last_name;
          const thru = index.thru;
          const currentRound = index.current_round;
          const status = index.status;
          const today = index.today;
          const round1 = index.rounds[0].strokes;
          const round2 = index.rounds[1].strokes;
          const round3 = index.rounds[2].strokes;
          const round4 = index.rounds[3].strokes;

          Golfer.findOneAndUpdate(
            { golferId: index.player_id },
            {
              $set: {
                firstName,
                lastName,
                "tournaments.masters.status": status,
                "tournaments.masters.thru": thru,
                "tournaments.masters.current_round": currentRound,
                "tournaments.masters.today": today,
                "tournaments.masters.scores.round1": round1,
                "tournaments.masters.scores.round2": round2,
                "tournaments.masters.scores.round3": round3,
                "tournaments.masters.scores.round4": round4
              }
            }
          ).then(name => {
            console.log(name);
          });
        });
      } catch (error) {
        console.error(error.message);
        response.status(500).send("Server Error (from player.js)");
      }
    })
    .catch(error => {
      console.log(error);
    });
});

/*********************************************************
route:         GET /get_pga_data
description:   Get tournament data and update golfer
               scores in my DB accordingly
**********************************************************/
router.get("/get_pga_data", (request, response, next) => {
  axios
    .get("https://statdata.pgatour.com/r/033/leaderboard-v2mini.json")
    .then(res => {
      // console.log(res.data.leaderboard.players);
      const players = res.data.leaderboard.players;
      response.send("API hit success");

      try {
        players.forEach(index => {
          const firstName = index.player_bio.first_name;
          const lastName = index.player_bio.last_name;
          const thru = index.thru;
          const currentRound = index.current_round;
          const status = index.status;
          const today = index.today;
          const round1 = index.rounds[0].strokes;
          const round2 = index.rounds[1].strokes;
          const round3 = index.rounds[2].strokes;
          const round4 = index.rounds[3].strokes;

          Golfer.findOneAndUpdate(
            { golferId: index.player_id },
            {
              $set: {
                firstName,
                lastName,
                "tournaments.pga.status": status,
                "tournaments.pga.thru": thru,
                "tournaments.pga.current_round": currentRound,
                "tournaments.pga.today": today,
                "tournaments.pga.scores.round1": round1,
                "tournaments.pga.scores.round2": round2,
                "tournaments.pga.scores.round3": round3,
                "tournaments.pga.scores.round4": round4
              }
            }
          ).then(name => {
            console.log(name);
          });
        });
      } catch (error) {
        console.error(error.message);
        response.status(500).send("Server Error (from player.js)");
      }
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
