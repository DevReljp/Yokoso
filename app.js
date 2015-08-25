/*-------------------------------------------------------------------------------------------------------------------*\
|  Copyright (C) 2015 PayPal                                                                                          |
|                                                                                                                     |
|  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
|  with the License.                                                                                                  |
|                                                                                                                     |
|  You may obtain a copy of the License at                                                                            |
|                                                                                                                     |
|       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
|                                                                                                                     |
|  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
|  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
|  the specific language governing permissions and limitations under the License.                                     |
\*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

// make `.jsx` file requirable by node
require('node-jsx').install();

var path = require('path');
var express = require('express');
var renderer = require('react-engine');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/yokoso');
var db = mongoose.connection;
db.once('open', function (callback) {
  // yay!
});

// create the view engine with `react-engine`
var engine = renderer.server.create({
  reactRoutes: path.join(__dirname + '/public/routes.js')
});

// set the engine
app.engine('.jsx', engine);
app.engine('.js', engine);

// set the view directory
app.set('views', __dirname + '/public/views');

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', renderer.expressView);

//expose public folder as static assets
app.use(express.static(__dirname + '/public'));
app.use(require('connect-livereload')());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render(req.url, {
    title: 'Yokoso'
  });
});

app.get('/sign_up', function(req, res) {
  res.render(req.url, {
    title: 'Sign up - Yokoso'
  });
});

app.get('/sign_in', function(req, res) {
  res.render(req.url, {
    title: 'Sign in - Yokoso'
  });
});

var AccountsController = require('./dest/controllers/accounts_controller')(app, mongoose);

// 404 template
app.use(function(req, res) {
  res.render('404.js', {
    title: 'React Engine Express Sample App',
    url: req.url
  });
});


var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
module.exports = server
