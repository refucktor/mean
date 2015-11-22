var mongoose = require('mongoose');

module.exports = {
    User: mongoose.model('User',{
        username : {type: String, unique : true},
        name     : String,
        lastName : String,
        sex      : String
    })
};
/*
module.exports = mongoose.model('User', {
    username : {type: String, unique : true},
    name     : String,
    lastName : String,
    sex      : String
});*/
