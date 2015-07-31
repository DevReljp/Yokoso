'use strict'

Layout = require './layout.js'
React  = require 'react'
Router = require 'react-router'

module.exports = React.createClass
  render: ->
    <Layout {...this.props}>
      <Router.RouteHandler {...this.props}/>
    </Layout>
