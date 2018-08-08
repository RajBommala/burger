//Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Create an instance of the express app.
var app = express();

// set port to 3000 or whatever heroku (deployment site) sets it to
var PORT = process.env.PORT || 3000;

// express middleware needed for serving static files. For more details
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars as the default templating engine.
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// now import the routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Initiate the listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
