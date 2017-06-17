// dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Article gets saved as a class, so we can create new Article objects
// and send them as validated, formatted data to our mongoDB collection
var Article = require("articleModel.js");

// initialize express
var app = express();

// configure app with morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));

// static file support with public folder
app.use(express.static("public"));

// database config for mongoose
mongoose.connect("mongodb://localhost/nytReact");
// hook mongoose connection to db
var db = mongoose.connection.;

// log any mongoose errors
db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

// log success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
	console.log("Mongoose connection successful.");
});

// ROUTES
// ======



// listen on port 3000
app.listen(3000, function() {
	console.log("App running on port 3000!");
});