'use strict';
var Layout, React;

Layout = require('./layout.js');

React = require('react');

module.exports = React.createClass({
  render: function() {
    return React.createElement(Layout, React.__spread({}, this.props), React.createElement("h3", null, "URL: ", this.props.url, " - Not Found(404)"), React.createElement("h6", null, "I am a Plain vanilla react view"));
  }
});
