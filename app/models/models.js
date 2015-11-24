var mongoose = require('mongoose');

var PerformanceSchema = new mongoose.Schema({
    gols        : { type: Number, default: 0 },
    assistances : { type: Number, default: 0 },
    yellowCards : { type: Number, default: 0 },
    redCards    : { type: Number, default: 0 },
    reg_play    : { type: Number, default: 0 },
    change_play : { type: Number, default: 0 },
    hattrick    : { type: Number, default: 0 },
    hand        : { type: Number, default: 0 },
    gols_neg    : { type: Number, default: 0 }
});

var PlayerSchema = new mongoose.Schema({
    name       : { type: String, unique: true, require: true },
    firstName  : { type: String, require: true },
    lastName   : { type: String, require: true },
    pos        : { type: String, enum: ['DEL', 'MED', 'DEF', 'POR', 'TEC'] },
    data       : { selection : String, club : String, number : Number },
    init_value : { type: Number, require: true },
    act_value  : { type: Number, require: false},
    performance: { type: mongoose.Schema.ObjectId, ref: 'Performance'}
});

var UserSchema = new mongoose.Schema({
    username : { type: String, trim: true ,unique : true, require: true },
    name     : { type: String, require: true },
    lastName : { type: String, require: true },
    sex      : { type: String, require: true },
    players  : {type: mongoose.Schema.ObjectId, ref: 'Player'}
});

module.exports = {
    User        : mongoose.model('User', UserSchema),
    Player      : mongoose.model('Player', PlayerSchema),
    Performance : mongoose.model('Performance', PerformanceSchema)
};
