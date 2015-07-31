'use strict';
var Link, React, Router;

React = require('react');

Router = require('react-router');

Link = Router.Link;

module.exports = React.createClass({
  displayName: 'account',
  getInitialState: function() {
    return {
      name: "test"
    };
  },
  submit_form: function(e) {
    console.log(e);
    e.preventDefault();
    return console.log($);
  },
  changeName: function(e) {
    console.log(e);
    return this.setState({
      name: e.target.value
    });
  },
  render: function() {
    var me;
    me = this;
    return React.createElement("div", {
      "id": 'account'
    }, React.createElement("h1", null, me.props.name), React.createElement("h6", null, "Sign up"), React.createElement(Link, {
      "to": "dashboard"
    }, "Back to Top"), React.createElement("br", null), React.createElement("form", {
      "onSubmit": me.submit_form
    }, React.createElement("input", {
      "type": "text",
      "value": me.state.name,
      "onChange": me.changeName
    }), React.createElement("button", {
      "onClick": me.submit_form
    }, "Submit")));
  }
});
