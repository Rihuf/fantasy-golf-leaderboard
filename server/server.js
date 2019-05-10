const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect to the database
connectDB();

//Initialize the middleware
app.use(express.json({ extended: false }));

/*********************************************************
A test to ensure the server is up and running.
Instructions: in cmd line, type npm run server.
In Postman, Send a GET to: http://localhost:8000/hello
**********************************************************/
app.get("/hello", (request, response) =>
  response.send("API is up and running.")
);

/*********************************************************
Defing the routes from the ./routes folder
**********************************************************/
app.use("/api/player", require("./routes/myAPI/player"));
app.use("/api/golfer", require("./routes/myAPI/golfer"));

//Define the port we want to use
const PORT = process.env.PORT || 8000;

//Open the port and start the server.
app.listen(PORT, () =>
  console.log(`(from Server.js) Server started on port: ${PORT}`)
);
