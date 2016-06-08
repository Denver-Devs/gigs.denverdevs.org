var express = require('express');
var request = require('request');
var config = require('./config.local.js');

var app = express();

app.use(express.static('app'));

app.set('router', express.Router());
app.set('request', request);
app.set('token', process.env.token);

app.use('/api', require('./api/GET.getPosts')(app));

app.listen(config.PORT);
