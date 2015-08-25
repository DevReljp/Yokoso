'use strict';
var Addons, Alert, Bootstrap, ButtonInput, Col, Input, Link, React, Router;

React = require('react');

Addons = require('react/addons');

Router = require('react-router');

Bootstrap = require('react-bootstrap');

Link = Router.Link;

Col = Bootstrap.Col;

Input = Bootstrap.Input;

ButtonInput = Bootstrap.ButtonInput;

Alert = Bootstrap.Alert;

module.exports = React.createClass({
  displyName: 'sign_in',
  getInitialState: function() {
    return {
      account: {
        email: "",
        password: ""
      },
      alert: {
        show: false,
        message: "",
        type: ""
      }
    };
  },
  submit_form: function(e) {},
  render: function() {
    var me;
    me = this;
    return React.createElement("div", {
      "id": 'sign_in'
    }, React.createElement(Col, {
      "md": 6.,
      "xsOffset": 3.
    }, React.createElement("h1", null, "Sign In"), React.createElement("form", {
      "onSubmit": me.submit_form
    }, React.createElement(Input, {
      "type": "email",
      "bsSize": "large",
      "rel": "input",
      "placeholder": "Email address",
      "value": me.state.account.email,
      "onChange": me.changeEmail
    }), React.createElement(Input, {
      "type": "password",
      "bsSize": "large",
      "rel": "input",
      "placeholder": "Password",
      "value": me.state.account.password,
      "onChange": me.changePassword
    }), (me.state.alert.show ? React.createElement(Alert, {
      "bsStyle": me.state.alert.type,
      "onDismiss": me.handleAlertDismiss,
      "dismissAfter": 2000.
    }, React.createElement("p", null, me.state.alert.message)) : void 0), React.createElement(ButtonInput, {
      "onClick": me.submit_form,
      "bsStyle": "primary",
      "bsSize": "large"
    }, "Sign in"), " or ", React.createElement(Link, {
      "to": "/sign_up"
    }, "sign up"), ".")));
  }
});
