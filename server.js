// declare modules and var
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// setup express server
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// route files, to send html to send data
require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes")(app);

// server to run main site
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
