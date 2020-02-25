var express = require('express');
var UserController = require('../controllers/userController');
var {auth} = require('../middleware/auth');
var path =  require('path')

const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {

        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
/*
var storageZip = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploadsZip')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+'.png')
    }
})*/

const upload = multer({storage : storage});
//const uploadZip = multer({storage : storageZip});

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
                upload.fields([{ name: 'pluginImage', maxCount: 1 }, { name: 'pluginZip', maxCount: 1 }]),
                UserController.submissionForm);

    router.post('/users/me/updateProfile',
                auth,
                UserController.updateProfile);

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

    router.post('/users/me/unLikePlugin', 
                auth,
                UserController.unLikePlugin);

    router.post('/users/me/addToCart',
            auth,
            UserController.addToCart);

    /*router.get('/users/me/isPluginLiked',
                auth,
                UserController.logoutall);*/
    return router;

}

module.exports = UserRoutes;
