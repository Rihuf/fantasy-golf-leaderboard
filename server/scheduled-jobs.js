var request = require("request");

function hitAPIUrl() {
  request("https://the-salisbury-open.herokuapp.com/golfer/get_usopen_data");
  // request("https://localhost:5000/golfer/get_usopen_data");
}

hitAPIUrl();

/****************************************************
 * This job is currently managed by Heroku Scheduler
 * Go there via Heroku App dashboard to manage.
 ****************************************************/
