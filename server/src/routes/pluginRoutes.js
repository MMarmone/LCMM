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
        res.contentType('json');
        res.send(plugin)
    });

    router.get('/plugins',async(req, res) => {
        const plugins = await Plugin.findAll();
        res.send(plugins)
    });
    /*
    router.get('/pluginInfo',async(req, res) => {
        const plugin = await Plugin.findByName(req.query.name);
        res.send(plugin)
    });*/
    return router;
}

module.exports = PluginRoutes;