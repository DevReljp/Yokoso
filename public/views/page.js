'use strict';
var Bootstrap, Button, Jumbotron, Link, Page, React, Router;

React = require('react');

Router = require('react-router');

Link = Router.Link;

Bootstrap = require('react-bootstrap');

Jumbotron = Bootstrap.Jumbotron;

Button = Bootstrap.Button;

Page = React.createClass({
  displayName: 'page',
  render: function() {
    console.log('this.props.setting', this.props.setting);
    return this["render_" + this.props.name]();
  },
  render_jumbotron: function() {
    var button;
    if (this.props.setting.more) {
      button = React.createElement(Page, {
        "name": "button",
        "setting": this.props.setting.more
      });
    }
    return React.createElement(Jumbotron, null, React.createElement("h1", null, this.props.setting.title), React.createElement("p", null, this.props.setting.body), React.createElement("p", null, button));
  },
  render_button: function() {
    return React.createElement(Button, {
      "bsStyle": this.props.setting.button.bsStyle
    }, this.props.setting.label);
  }
});

module.exports = Page;
