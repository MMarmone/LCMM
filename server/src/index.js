//Import Libraries
var express = require('express'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    request = require('request');
let morgan = require('morgan');
//Import custom modules
var userRoutes = require('./routes/userRoutes');
var pluginRoutes = require('./routes/pluginRoutes');
var config = require('./configs/config');

//Connect to Mongo DB
if(process.env.NODE_ENV !== 'test') {
    const conn = mongoose.connect(process.env.MONGODB_URL,{ 
        useNewUrlParser: true,
        useCreateIndex: true,
    });
}else{
    const conn = mongoose.connect("mongodb+srv://LCMM:azerty@clusterlcmm-mgzj7.mongodb.net/TEST?retryWrites=true&w=majority",{ 
        useNewUrlParser: true,
        useCreateIndex: true,
    });
}
mongoose.set('useFindAndModify', false);

//Create a new Express application and Configure it
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, token, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization")
    next();
});
app.use(express.static('uploads'));

//Configure Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(config.API_PATH, userRoutes());
app.use(config.API_PATH, pluginRoutes());

//Start the server

app.listen(config.PORT);
console.log('Server started at - '+ config.URL+ ":" +config.PORT)


module.exports = app; //FOR TESTING 