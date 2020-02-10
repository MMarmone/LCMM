var express = require('express');
var UserController = require('../controllers/userController');
var auth = require('../middleware/auth');
var Plugin = require('../models/plugin');

//Routes for plugins
var PluginRoutes = function(app)
{
    var router = express.Router();
    router.get('/pluginInfo',async(req, res) => {
        const plugin = await Plugin.findByName(req.query.name);
        res.send(plugin)
    });
    /*
    router.get('/pluginInfo',async(req, res) => {
        const plugin = await Plugin.findByName(req.query.name);
        res.send(plugin)
    });*/
    return router;
}

module.exports = PluginRoutes;