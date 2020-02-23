var User = require('../models/user');
var Plugin = require('../models/plugin');
const jwt = require('jsonwebtoken');


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
      res.status(403).send({error: error.message})
    }
  },

    //Create a User
    register : async(req, res)=>{
        try {
            const email = req.body.email;
            await User.verifyEmailNotUsed(email);
            const user = new User(req.body);
            const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
            user.tokens = user.tokens.concat({token});
            user.save();
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
      res.status(500).send({error: error.message})
    }
  },

  logoutall : async(req, res) => {
      // Log user out of all devices
      try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
      } catch (error) {
        res.status(500).send({error: error.message})
      }
  },

  updateProfile : async(req, res) => {
    try {
      console.log("test")
      const token = req.header('authorization').split(' ')[1];
      const data = jwt.verify(token, process.env.JWT_KEY)
      const user = await User.findOne({ _id: data._id, 'tokens.token': token })
      user.name = req.body.name
      user.email = req.body.email
      user.gender = req.body.gender
      console.log("test")
      user.save()
      console.log("test")
      res.send(user)
    }catch (error) {

      res.status(500).send(error)
    }

  },

  submissionForm : async(req, res) => {
        // save a the plugin form in db
        try {
            const token = req.header('authorization').split(' ')[1];
            const data = jwt.verify(token, process.env.JWT_KEY)
            const user = await User.findOne({ _id: data._id, 'tokens.token': token })
            /*if (plugin) {
                return res.status(403).send({error: 'Name and version already use'})
            }*/
            plugin = new Plugin({
                name : req.body.name,
                version : req.body.version,
                description : req.body.description,
                isOpenSource : req.body.isOpenSource,
                category : req.body.category,
                tags : req.body.tags,
                urls : req.body.urls,
                pluginImage : req.file.path,
                isVerified : false,
                user : user.name,
                userEmail : user.email
            });
            plugin.save();
            res.send();
        } catch (error) {
            res.status(500).send(error)
        }
    },

    commentPlugin : async(req, res) => {
      try {
          const pluginId = req.body.pluginId;

          const token = req.header('authorization').split(' ')[1];
          const data = jwt.verify(token, process.env.JWT_KEY)
          const user = await User.findOne({ _id: data._id, 'tokens.token': token })
          const date = new Date()
          const comment = {
              author : user.name,
              value : req.body.value ,
              posted : date.toString()}
          await Plugin.findByIdAndUpdate(
              pluginId,
              {$addToSet : {"comments" : comment}},
              {  safe: true, upsert: true},
                function(err, model) {
                  if(err){
                     console.log(err);
                     return res.send("bad plugin id");
                  }
                   return res.json(model);
               });
      }catch (error){
          res.status(501).send(error)
      }
  },

  likePlugin : async(req, res) => {
      try {
          const pluginId = req.body.pluginId;
          const token = req.header('authorization').split(' ')[1];
          const data = jwt.verify(token, process.env.JWT_KEY);

          const user = await User.findByIdAndUpdate(
              data._id,
              {$addToSet : {"pluginLiked" : {pluginId : pluginId}}},
              {  safe: true, upsert: true},
              function(err, model) {
                  if(err){
                     console.log(err);
                     return res.send(err);
                  }

              }
          );

          await Plugin.findByIdAndUpdate(
              pluginId,
              {$inc:{likes:1}},
              { new: true},
                  function(err, model) {
                  if(err){
                      console.log(err);
                      return res.send(err);
                  }

                  }
              );
          res.send(user);
      }catch (error){
          res.status(500).send(error)
      }
  }
}

module.exports = UserController;
