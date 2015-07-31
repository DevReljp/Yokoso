'use strict'

React = require 'react'
Menu = require './menu.js'

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
          {this.props.children}
	</div>
      </body>
      <script src='/javascripts/application.js'></script>
    </html>
