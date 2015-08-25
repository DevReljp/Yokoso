'use strict'
React = require 'react'
Router = require 'react-router'
Link = Router.Link
Bootstrap = require 'react-bootstrap'
Nav = Bootstrap.Nav
NavItem = Bootstrap.NavItem

module.exports = React.createClass
  displayName: 'menu'
  handleSelect: (e) ->
    console.log e
  render: ->
    me = this
    <Nav bsStyle='pills' activeKey={2} onSelect={me.handleSelect}>
      <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
      <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
      <NavItem eventKey={3} disabled={true}>NavItem 3 content</NavItem>
    </Nav>
