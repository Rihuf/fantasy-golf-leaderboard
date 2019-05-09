const express = require("express");
const router = express.Router();

/*********************************************************
route:         GET /tournament
description:   get a tournament
**********************************************************/
router.get("/", (request, response) => response.send("Tournament route"));

module.exports = router;
