'use strict'
React = require 'react'
Router = require 'react-router'
Link = Router.Link

module.exports = React.createClass
  displayName: 'dashboard'
  render: ->
    <div id='account'>
      <h1>{this.props.name}</h1>
      <h6>I am a React Router rendered view</h6>
      <Link to="account">Sign up</Link><br />
      <a href='/some_unknown'>Click to go to an unhandled route</a>
    </div>

