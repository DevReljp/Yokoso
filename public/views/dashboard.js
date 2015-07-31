'use strict';
var Link, React, Router;

React = require('react');

Router = require('react-router');

Link = Router.Link;

module.exports = React.createClass({
  displayName: 'dashboard',
  render: function() {
    return React.createElement("div", {
      "id": 'account'
    }, React.createElement("h1", null, this.props.name), React.createElement("h6", null, "I am a React Router rendered view"), React.createElement(Link, {
      "to": "account"
    }, "Sign up"), React.createElement("br", null), React.createElement("a", {
      "href": '/some_unknown'
    }, "Click to go to an unhandled route"));
  }
});
