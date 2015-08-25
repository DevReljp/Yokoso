'use strict';
var Bootstrap, Link, Nav, NavItem, React, Router;

React = require('react');

Router = require('react-router');

Link = Router.Link;

Bootstrap = require('react-bootstrap');

Nav = Bootstrap.Nav;

NavItem = Bootstrap.NavItem;

module.exports = React.createClass({
  displayName: 'menu',
  handleSelect: function(e) {
    return console.log(e);
  },
  render: function() {
    var me;
    me = this;
    return React.createElement(Nav, {
      "bsStyle": 'pills',
      "activeKey": 2.,
      "onSelect": me.handleSelect
    }, React.createElement(NavItem, {
      "eventKey": 1.,
      "href": '/home'
    }, "NavItem 1 content"), React.createElement(NavItem, {
      "eventKey": 2.,
      "title": 'Item'
    }, "NavItem 2 content"), React.createElement(NavItem, {
      "eventKey": 3.,
      "disabled": true
    }, "NavItem 3 content"));
  }
});
