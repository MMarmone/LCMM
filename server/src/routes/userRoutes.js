var express = require('express');
var UserController = require('../controllers/userController');
var auth = require('../middleware/auth');

const multer = require('multer');
const upload = multer({dest : 'uploads/'});

//Routes for User
var UserRoutes = function(app)
{
    var router = express.Router();

    router.route('/users/register')
        .post(UserController.register);

    router.route('/users/login')
        .post(UserController.login);

    router.get('/users/me', auth, async(req, res) => {
        res.send(req.user)
    });
    
    router.post('/users/me/submissionForm',
                auth,
                upload.single('pluginImage'),
                UserController.submissionForm);

    router.post('/users/me/logout',
                auth,
                UserController.logout);
    
    router.post('/users/me/logoutall', 
                auth,
                UserController.logoutall);
    
    return router;

}

module.exports = UserRoutes;