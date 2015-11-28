var models = require('./models/models');
var User = models.User;
var Performance = models.Performance;
var Player = models.Player;
module.exports = function(app){

    // JSON API ----------------------------------------------------------------
    // get home page
    app.get('/', function (req, res) {
        res.render('index');
    });

    // JSON API ----------------------------------------------------------------
    // get all users
    app.get('/api/users', function(req, res) {
        User.find(function (err, data) {
            if(err) res.send(err);
            res.json(data);
        })
    });
    // JSON API ----------------------------------------------------------------
    // get
    app.get('/api/perf', function(req, res) {
        var perf = new Performance();
        perf.save(function(err, model){
            if(err) console.log(err);

            res.json(model);
        });
    });
    // JSON API ----------------------------------------------------------------
    // get to a team for hmvalcarcels
    app.get('/api/h', function (req, res) {
        var del, med, def, por;
        var user = new User();
        user.username = "hmvalcarcel";
        user.name = "Hector Manuel";
        Player.find({pos: 'DEL'}, null, {limit: 4}, function (err, data) {
            for (var i = 0; i < data.length; i++) {
                user.team.del.push({player: data[i]._id, reg: true});

            }
            user.save(function (err) {
                if (err) console.log(err);
            })
        });
        console.log(user.team);
        Player.find({pos: 'MED'}, null, {limit: 4}, function (err, data) {
            for (var i = 0; i < data.length; i++) {
                user.team.med.push({player: data[i], reg: true})

            }
            user.save(function (err) {
                if (err) console.log(err);
            })
        });
        Player.find({pos: 'DEF'}, null, {limit: 5}, function (err, data) {
            for (var i = 0; i < data.length; i++) {
                user.team.def.push({player: data[i]._id, reg: true})

            }
            user.save(function (err) {
                if (err) console.log(err);
            })
        });
        Player.find({pos: 'POR'}, null, {limit: 2}, function (err, data) {
            for (var i = 0; i < data.length; i++) {
                user.team.por.push({player: data[i]._id, reg: true})

            }
            user.save(function (err) {
                if (err) console.log(err);
            })
        });
    });

    // JSON API ----------------------------------------------------------------
    // get autofill players
    app.get('/api/fillplayers', function (req, res) {
        for (var i = 0; i < 50; i++) {
            var del = new Player();
            del.name = "Cuco";
            del.pos = 'DEL';
            del.save(function (err) {
                console.log(err);
            })
        }
        for (var i = 0; i < 50; i++) {
            var del = new Player();
            del.name = "Pepe";
            del.pos = 'MED';
            del.save(function (err) {
                console.log(err);
            })
        }
        for (var i = 0; i < 50; i++) {
            var del = new Player();
            del.name = "Lolo";
            del.pos = 'DEF';
            del.save(function (err) {
                console.log(err);
            })
        }
        for (var i = 0; i < 50; i++) {
            var del = new Player();
            del.name = "Yeyo";
            del.pos = 'POR';
            del.save(function (err) {
                console.log(err);
            })
        }
    });

    // JSON API ----------------------------------------------------------------
    // get a player
    app.get('/api/player/:id', function (req, res) {
        var playerId = req.params.id;

        Player.findById(playerId, function (err, model) {
            if (err) console.log('api Error: ' + err);

            res.json(model);
        });
    });

    // JSON API ----------------------------------------------------------------
    // get myteam
    app.get('/api/myteam', function (req, res) {
        User.findOne({}, 'team', {populate: "team.player", lean: true}, function (err, data) {
            if (err) console.log(err);
            res.json(data.team);
        })
    });
};
