'use strict'

React = require 'react'
Menu = require './menu.js'
Bootstrap = require 'react-bootstrap'
Row = Bootstrap.Row

module.exports = React.createClass
  render: ->
    <html>
      <head>
        <meta charSet='utf-8' />
        <title>
          {this.props.title}
        </title>
        <link rel="stylesheet" href="/stylesheets/application.css" />
      </head>
      <body>
        <div class="container">
          <Menu />
          <Row>
            {this.props.children}
          </Row>
	      </div>
      </body>
      <script src='/javascripts/application.js'></script>
    </html>
