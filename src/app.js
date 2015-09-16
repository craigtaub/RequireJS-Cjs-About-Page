var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./routes')(app),
    server = require('./server')(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

module.exports = app;
