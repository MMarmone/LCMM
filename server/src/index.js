//Import Libraries
var express = require('express'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    request = require('request');

//Import custom modules
var userRoutes = require('./routes/userRoutes');
var testRoutes = require('./routes/testRoutes');
var config = require('./configs/config');

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URL,{ 
    useNewUrlParser: true,
    useCreateIndex: true,
});

//Create a new Express application and Configure it
var app = express();

//Configure Routes
app.use(bodyParser.json());
app.use(config.API_PATH, userRoutes());
app.use(config.API_PATH, testRoutes());

//Start the server
app.listen(config.PORT); 
console.log('Server started at - '+ config.URL+ ":" +config.PORT);

