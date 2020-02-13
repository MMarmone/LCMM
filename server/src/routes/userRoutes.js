var express = require('express');
var UserController = require('../controllers/userController');
var auth = require('../middleware/auth');

const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer(storage);

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
    

    router.post('/users/me/commentPlugin', 
                auth,
                UserController.commentPlugin);

    router.post('/users/me/likePlugin', 
                auth,
                UserController.likePlugin);

    /*router.get('/users/me/isPluginLiked', 
                auth,
                UserController.logoutall);*/
    return router;

}

module.exports = UserRoutes;