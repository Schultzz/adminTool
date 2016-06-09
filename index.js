var express = require('express');
var app = express();

var morgan = require('morgan'); // Log requests to console
var bodyParser = require('body-parser'); // Get info from html POST

//var userApi = require('./server/routes/UserApi');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));

// views is directory for all template files
app.locals.pretty = true;

//app.use('/api', userApi);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({'error': err.message});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


