var express = require('express'),

app = express(),

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}),

port = process.env.PORT || 3000,

mongoose = require('mongoose'),

Message = require('./api/models/msgModel'),

bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:admin123@ds125841.mlab.com:25841/heroku_x3bclfj9');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var routes = require('./api/routes/msgRoutes');

routes(app);

app.listen(port);

console.log('Message RESTful API server started on: ' + port);
