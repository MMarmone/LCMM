var express = require('express');
var TestController = require('../controllers/testController');

//Routes for User
var TestRoutes = function(app)
{
    var router = express.Router();

router.route('/test')
    .get(TestController.create);

router.route('/test2')
    .post(TestController.create_post);


return router;

}

module.exports = TestRoutes;