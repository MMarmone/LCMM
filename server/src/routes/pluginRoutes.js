var express = require('express');
var UserController = require('../controllers/userController');
var {adminAuth} = require('../middleware/auth');
var Plugin = require('../models/plugin');

//Routes for plugins
var PluginRoutes = function(app)
{
    var router = express.Router();
    router.get('/pluginInfo',async(req, res) => {
        try {
            const plugin = await Plugin.findByName(req.query.name);
            res.contentType('json');
            res.send(plugin)
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    });

    router.get('/plugins',async(req, res) => {
        try {
        const plugins = await Plugin.find({ 'isVerified': true }, function (err, plugin) {
            if (err) return handleError(err);
           
            res.send(plugin)
          });
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    });

    router.get('/admin', adminAuth, async(req, res) => {
        res.send(req.user)
    });
    
    router.get('/admin/plugins/notVerified', adminAuth, async(req, res) => {
        Plugin.find({ 'isVerified': false }, function (err, plugin) {
            if (err) return handleError(err);
           
            res.send(plugin)
          });
        
    });

    router.post('/admin/plugins/verifyOne', adminAuth, async(req, res) => {
        try {
            const pluginId = req.body.pluginId;
            await Plugin.findByIdAndUpdate(
                pluginId,
                {$set:{isVerified:true}},
                { new: true},
                    function(err, model) {
                    if(err){
                        console.log(err);
                        return res.send(err);
                    }
                    }
                );
            res.send()
        } catch (error) {
            res.status(500).send({error: error.message})
        }
     });


    /*
    router.get('/pluginInfo',async(req, res) => {
        const plugin = await Plugin.findByName(req.query.name);
        res.send(plugin)
    });*/
    return router;
}

module.exports = PluginRoutes;