var express = require('express');
var UserController = require('../controllers/userController');

//Routes for User
var UserRoutes = function(app)
{
    var router = express.Router();

router.route('/users/register')
    .post(UserController.register);

router.route('/users/login')
    .post(UserController.login);

return router;

}

module.exports = UserRoutes;