'use strict'
React = require 'react'
Router = require 'react-router'
Link = Router.Link
Bootstrap = require 'react-bootstrap'
Jumbotron = Bootstrap.Jumbotron
Button    = Bootstrap.Button
Page = React.createClass
  displayName: 'page'
  render: ->
    console.log 'this.props.setting', this.props.setting
    this["render_"+this.props.name]()
  render_jumbotron: ->
    if this.props.setting.more
      button = <Page name="button" setting={this.props.setting.more} />
    <Jumbotron>
      <h1>{this.props.setting.title}</h1>
      <p>{this.props.setting.body}</p>
      <p>{button}</p>
    </Jumbotron>
  render_button: ->
    <Button bsStyle={this.props.setting.button.bsStyle}>{this.props.setting.label}</Button>
module.exports = Page