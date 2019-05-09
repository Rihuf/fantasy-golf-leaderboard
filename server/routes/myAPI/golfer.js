const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

//Bring in the golfer model
const Golfer = require("../../models/Golfer");

/*********************************************************
route:         POST /golfer
description:   add a golfer to my api
**********************************************************/
router.post(
  "/",
  [
    check("tournamentId", "Tournament ID is required")
      .not()
      .isEmpty(),
    check("golferId", "Golfer ID is required")
      .not()
      .isEmpty(),
    check("firstName", "First Name is required")
      .not()
      .isEmpty(),
    check("lastName", "Last Name is required")
      .not()
      .isEmpty(),
    check("thru", "Thru is required")
      .not()
      .isEmpty(),
    check("current_round", "Current Round is required")
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
      tournamentId,
      golferId,
      firstName,
      lastName,
      thru,
      current_round,
      scores,
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
          tournamentId,
          golferId,
          firstName,
          lastName,
          thru,
          current_round,
          scores,
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

module.exports = router;
