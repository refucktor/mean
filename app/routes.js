var models = require('./models/models');
var User = models.User;
module.exports = function(app){

    // JSON API ----------------------------------------------------------------
    // get all users
    app.get('/api/users', function(req, res) {
        User.find(function (err, data) {
            if(err) res.send(err);

            res.json(data);
        })
    });

    // JSON API ----------------------------------------------------------------
    // get home page
    app.get('/', function(req, res) {
       res.render('index');
    });
};
