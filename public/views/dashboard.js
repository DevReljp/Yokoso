'use strict';
var Account, Bootstrap, Col, Grid, Link, Menu, Page, React, Router, Row, contents;

React = require('react');

Router = require('react-router');

Link = Router.Link;

Bootstrap = require('react-bootstrap');

Row = Bootstrap.Row;

Col = Bootstrap.Col;

Grid = Bootstrap.Grid;

Account = require('./account');

Menu = require('./menu');

contents = require('../../dest/contents.json').dashboard;

Page = require('./page');

module.exports = React.createClass({
  displayName: 'dashboard',
  getInitialState: function() {
    return {
      contents: contents
    };
  },
  render: function() {
    var name, pages, ref, setting;
    console.log('Menu', Menu);
    pages = [];
    ref = this.state.contents;
    for (name in ref) {
      setting = ref[name];
      pages.push(React.createElement(Page, {
        "name": name,
        "setting": setting
      }));
    }
    return React.createElement("div", {
      "id": 'account'
    }, React.createElement(Menu, null), React.createElement(Col, {
      "md": 8.,
      "xsOffset": 2.
    }, React.createElement("div", null, pages)));
  }
});
