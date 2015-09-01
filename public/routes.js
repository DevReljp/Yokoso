'use strict';
var Account, App, Dashboard, Menu, React, Router, SignIn, routes;

React = require('react');

Router = require('react-router');

App = require('./views/app.js');

Account = require('./views/account.js');

Menu = require('./views/menu.js');

Dashboard = require('./views/dashboard.js');

SignIn = require('./views/sign_in.js');

routes = module.exports = React.createElement(Router.Route, {
  "path": '/',
  "handler": App
}, React.createElement(Router.Route, {
  "path": '/',
  "name": 'dashboard',
  "handler": Dashboard
}), React.createElement(Router.Route, {
  "path": '/sign_up',
  "name": "account",
  "handler": Account
}), React.createElement(Router.Route, {
  "path": '/sign_in',
  "name": "sign_in",
  "handler": SignIn
}));
