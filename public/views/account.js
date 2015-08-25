'use strict';
var Addons, Alert, Bootstrap, ButtonInput, Col, Input, Link, Navigation, React, Router, TransitionHook;

React = require('react');

Addons = require('react/addons');

Router = require('react-router');

Bootstrap = require('react-bootstrap');

Link = Router.Link;

Col = Bootstrap.Col;

Input = Bootstrap.Input;

ButtonInput = Bootstrap.ButtonInput;

Alert = Bootstrap.Alert;

TransitionHook = Router.TransitionHook;

Navigation = Router.Navigation;

module.exports = React.createClass({
  displayName: 'account',
  mixins: [Navigation, TransitionHook],
  getInitialState: function() {
    return {
      account: {
        name: "",
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
  submit_form: function(e) {
    var data, me;
    e.preventDefault();
    data = this.state.account;
    me = this;
    return jQuery.ajax({
      data: data,
      url: '/accounts',
      type: 'post',
      dataType: 'json'
    }).then(function(data) {
      me.setState(React.addons.update(me.state, {
        alert: {
          show: {
            $set: true
          },
          message: {
            $set: "Registration successful"
          },
          type: {
            $set: "success"
          }
        }
      }));
      me.transitionTo('/sign_in');
      return console.log(data);
    }, function(error) {
      return console.log(error);
    });
  },
  handleAlertDismiss: function(e) {
    return this.setState(React.addons.update(this.state, {
      alert: {
        show: {
          $set: false
        }
      }
    }));
  },
  changeAccountName: function(e) {
    return this.setState(React.addons.update(this.state, {
      account: {
        name: {
          $set: e.target.value
        }
      }
    }));
  },
  changeEmail: function(e) {
    return this.setState(React.addons.update(this.state, {
      account: {
        email: {
          $set: e.target.value
        }
      }
    }));
  },
  changePassword: function(e) {
    return this.setState(React.addons.update(this.state, {
      account: {
        password: {
          $set: e.target.value
        }
      }
    }));
  },
  render: function() {
    var me;
    me = this;
    return React.createElement("div", {
      "id": 'account'
    }, React.createElement(Col, {
      "md": 6.,
      "xsOffset": 3.
    }, React.createElement("h1", null, "Sign up"), React.createElement("form", {
      "onSubmit": me.submit_form
    }, React.createElement(Input, {
      "type": "text",
      "bsSize": "large",
      "rel": "input",
      "placeholder": "User name",
      "value": me.state.account.name,
      "onChange": me.changeAccountName
    }), React.createElement(Input, {
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
    }, "Register"), " or ", React.createElement(Link, {
      "to": "/sign_in"
    }, "Sign in"), ".")));
  }
});
