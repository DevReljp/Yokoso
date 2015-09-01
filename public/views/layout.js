'use strict';
var Bootstrap, Col, Grid, Menu, React, Row;

React = require('react');

Menu = require('./menu.js');

Bootstrap = require('react-bootstrap');

Row = Bootstrap.Row;

Col = Bootstrap.Col;

Grid = Bootstrap.Grid;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    return React.createElement("html", null, React.createElement("head", null, React.createElement("meta", {
      "charSet": 'utf-8'
    }), React.createElement("title", null, this.props.title), React.createElement("link", {
      "rel": "stylesheet",
      "href": "/stylesheets/application.css"
    })), React.createElement("body", null, this.props.children), React.createElement("script", {
      "src": '/javascripts/application.js'
    }));
  }
});
