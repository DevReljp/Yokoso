'use strict'
React = require 'react'
Router = require 'react-router'
Link = Router.Link
Bootstrap = require 'react-bootstrap'
Nav = Bootstrap.Nav
Navbar = Bootstrap.Navbar
NavItem = Bootstrap.NavItem
NavDropdown = Bootstrap.NavDropdown
MenuItem    = Bootstrap.MenuItem
CollapsibleNav = Bootstrap.CollapsibleNav

Account = require './account'

module.exports = React.createClass
  displayName: 'menu'
  contextTypes:
    router: React.PropTypes.func
  handleSelect: (e) ->
    console.log e
  render: ->
    me = this
    <Navbar brand={<Link to="dashboard">Yokoso</Link>} toggleNavKey={0} >
      <CollapsibleNav eventKey={0}>
        <Nav navbar onSelect={me.handleSelect}>
          <NavItem eventKey={1} href='#'>Link</NavItem>
          <NavItem eventKey={2} href='#'>Link</NavItem>
        </Nav>
        <Nav navbar right>
          <NavDropdown eventKey={3} title='Login' id='nav-brand-dropdown'>
            <MenuItem eventKey='1'><Link to="account" handler={Account}>Sign up</Link></MenuItem>
            <MenuItem eventKey='2'>Another action</MenuItem>
            <MenuItem eventKey='3'>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='4'>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </CollapsibleNav>
    </Navbar>
