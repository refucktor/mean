// set up  ==========================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 3000; 				// set the port
var database = require('./app/db/database'); 			// load the database config

var path = require('path');
var logger = require('morgan'); 		// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
//var angular = require('angular');
//var favicon = require('serve-favicon');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/frontend', express.static(path.join(__dirname, 'app/frontend')));

// configuration ===================================================================
mongoose.connect(database.dev_url); 	// connect to mongoDB database on modulus.io

// routes ==========================================================================
require('./app/routes.js')(app);
app.use('/jquery.min.js', express.static(__dirname + '/node_modules/jquery/dist/jquery.min.js'));
app.use('/angular.js', express.static(__dirname + '/node_modules/angular/angular.js'));
app.use('/angular-route.js', express.static(__dirname + '/node_modules/angular-route/angular-route.js'));

// view engine setup ===============================================================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
