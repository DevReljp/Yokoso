'use strict'

React = require 'react'
Menu = require './menu.js'
Bootstrap = require 'react-bootstrap'
Row = Bootstrap.Row
Col = Bootstrap.Col
Grid = Bootstrap.Grid

module.exports = React.createClass
  contextTypes:
    router: React.PropTypes.func
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
        {this.props.children}
      </body>
      <script src='/javascripts/application.js'></script>
    </html>
