const mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
    sujet : {type : String},
    auteur : {type : String},
    description : {type : String},
    message : {type : String},

})

module.exports = mongoose.model('Blog', blogSchema);