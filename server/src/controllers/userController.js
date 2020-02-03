var User = require('../models/user');
var Plugin = require('../models/plugin');
const upload = require("../middleware/upload");
var crypto = require('crypto');

//Controller for User
var UserController = {

    login : async(req, res)=>{
        try {
            const { email, password } = req.body
            const user = await User.findByCredentials(email, password)
            if (!user) {
                return res.status(401).send({error: 'Login failed! Check authentication credentials'})
            }
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (error) {
            res.status(403).send(error)
        }
    },

    //Create a User
    register : async(req, res)=>{
        try {
            const email = req.body.email
            const user = await User.findByEmail(email)
            if (user) {
                return res.status(403).send({error: 'Email already use'})
            }
            user = new User(req.body);
            user.save();
            const token = await user.generateAuthToken();
            res.status(201).send({ user, token });
        } catch (error) {
            res.status(400).send(error);
        }
    },

    logout : async(req,res)=>{
        // Log user out of the application
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token != req.token
            })
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    },

    logoutall : async(req, res) => {
        // Log user out of all devices
        try {
            req.user.tokens.splice(0, req.user.tokens.length)
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    },

    submissionForm : async(req, res) => {
        // save a the plugin form in db
        try {

            plugin = new Plugin(req.body);
            plugin.save();
            res.send();
        } catch (error) {
            res.status(500).send(error)
        }
    }

}

module.exports = UserController;