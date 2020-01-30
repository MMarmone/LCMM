//Import Libraries
var express = require('express'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    request = require('request');

//Import custom modules
var userRoutes = require('./routes/userRoutes');
var config = require('./configs/config');

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URL,{ 
    useNewUrlParser: true,
    useCreateIndex: true,
});

//Create a new Express application and Configure it
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    next();
  });
//Configure Routes
app.use(bodyParser.json());
app.use(config.API_PATH, userRoutes());

//Start the server
app.listen(config.PORT); 
console.log('Server started at - '+ config.URL+ ":" +config.PORT);

