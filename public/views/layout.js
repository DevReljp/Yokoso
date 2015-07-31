'use strict';
var Menu, React;

React = require('react');

Menu = require('./menu.js');

module.exports = React.createClass({
  render: function() {
    return React.createElement("html", null, React.createElement("head", null, React.createElement("meta", {
      "charSet": 'utf-8'
    }), React.createElement("title", null, this.props.title), React.createElement("link", {
      "rel": "stylesheet",
      "href": "/stylesheets/application.css"
    })), React.createElement("body", null, React.createElement("div", {
      "class": "container"
    }, React.createElement(Menu, null), this.props.children)), React.createElement("script", {
      "src": '/javascripts/application.js'
    }));
  }
});
