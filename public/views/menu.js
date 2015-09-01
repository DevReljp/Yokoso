'use strict';
var Account, Bootstrap, CollapsibleNav, Link, MenuItem, Nav, NavDropdown, NavItem, Navbar, React, Router;

React = require('react');

Router = require('react-router');

Link = Router.Link;

Bootstrap = require('react-bootstrap');

Nav = Bootstrap.Nav;

Navbar = Bootstrap.Navbar;

NavItem = Bootstrap.NavItem;

NavDropdown = Bootstrap.NavDropdown;

MenuItem = Bootstrap.MenuItem;

CollapsibleNav = Bootstrap.CollapsibleNav;

Account = require('./account');

module.exports = React.createClass({
  displayName: 'menu',
  contextTypes: {
    router: React.PropTypes.func
  },
  handleSelect: function(e) {
    return console.log(e);
  },
  render: function() {
    var me;
    me = this;
    return React.createElement(Navbar, {
      "brand": React.createElement(Link, {
        "to": "dashboard"
      }, "Yokoso"),
      "toggleNavKey": 0.
    }, React.createElement(CollapsibleNav, {
      "eventKey": 0.
    }, React.createElement(Nav, {
      "navbar": true,
      "onSelect": me.handleSelect
    }, React.createElement(NavItem, {
      "eventKey": 1.,
      "href": '#'
    }, "Link"), React.createElement(NavItem, {
      "eventKey": 2.,
      "href": '#'
    }, "Link")), React.createElement(Nav, {
      "navbar": true,
      "right": true
    }, React.createElement(NavDropdown, {
      "eventKey": 3.,
      "title": 'Login',
      "id": 'nav-brand-dropdown'
    }, React.createElement(MenuItem, {
      "eventKey": '1'
    }, React.createElement(Link, {
      "to": "account",
      "handler": Account
    }, "Sign up")), React.createElement(MenuItem, {
      "eventKey": '2'
    }, "Another action"), React.createElement(MenuItem, {
      "eventKey": '3'
    }, "Something else here"), React.createElement(MenuItem, {
      "divider": true
    }), React.createElement(MenuItem, {
      "eventKey": '4'
    }, "Separated link")))));
  }
});
