'use strict';
var Layout, React, Router;

Layout = require('./layout.js');

React = require('react');

Router = require('react-router');

module.exports = React.createClass({
  render: function() {
    return React.createElement(Layout, React.__spread({}, this.props), React.createElement(Router.RouteHandler, React.__spread({}, this.props)));
  }
});
