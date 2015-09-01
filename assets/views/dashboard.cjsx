'use strict'
React = require 'react'
Router = require 'react-router'
Link = Router.Link
Bootstrap = require 'react-bootstrap'
Row = Bootstrap.Row
Col = Bootstrap.Col
Grid = Bootstrap.Grid
Account = require './account'
Menu = require './menu'
contents   = require('../../dest/contents.json').dashboard
Page = require './page'

module.exports = React.createClass
  displayName: 'dashboard'
  getInitialState: ->
    contents: contents
  render: ->
    console.log('Menu', Menu)
    pages = []
    for name, setting of this.state.contents
      pages.push <Page name={name} setting={setting} />
    <div id='account'>
      <Menu />
      <Col md={8} xsOffset={2}>
        <div>{pages}</div>
      </Col>
    </div>
