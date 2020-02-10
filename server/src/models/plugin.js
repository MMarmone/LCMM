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
    //    required: true
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
    tags: [{
        type : String
    }],
    urls: [{
        type : String
    }],
    pluginImage:{
        type : String, 
        require : true

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

//Define the model for plugin
const Plugin = mongoose.model('Plugin', pluginSchema);

//Export the plugin Model
module.exports = Plugin;