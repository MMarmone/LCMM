var mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;

//Schema for plugin
var pluginSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    version : {
        type :String,
    },
    description : {
        type : String,
    },
    isOpensource: {
        type: Boolean,
    },
    category:{
        type : String,
    },
    tags: [{
        type : String
    }],
    urls: [{
        type : String
    }],
    pluginImage:{
        type : String,
        require : true
    },
    isVerified:{
        type :Boolean,
        require : true
    },

    user : {
        type : String,
        require : true
    },
    userEmail : {
        type : String,
        require : true
    },
    comments : [{
        author : { type : String},
        value : { type : String},
        posted: {  type :Date}
    }],
    likes : {
        type : Number
    }

});

pluginSchema.pre('save', async function (next) {
    const plugin = this;
    next();
});

pluginSchema.statics.findByName = async (name) => {
    // Search for a user by email.
    const plugin = await Plugin.findOne({ name} )
    if (!plugin) {
        throw new Error({ error: 'Invalid name' })
    }
    return plugin
};

pluginSchema.statics.findAll = async () => {
    return Plugin.find({});
};

//Define the model for plugin
const Plugin = mongoose.model('Plugin', pluginSchema);

//Export the plugin Model
module.exports = Plugin;
