'use strict'
React = require 'react'
Addons = require 'react/addons'
Router = require 'react-router'
Bootstrap = require 'react-bootstrap'
Link = Router.Link
# <Col xs={6} xsOffset={6} />
Col = Bootstrap.Col
Input = Bootstrap.Input
ButtonInput = Bootstrap.ButtonInput
Alert = Bootstrap.Alert

module.exports = React.createClass
  displyName: 'sign_in'
  getInitialState: ->
    account:
      email:    ""
      password: ""
    alert:
      show: false
      message: ""
      type: ""
  submit_form: (e) ->

  render: ->
    me = this
    <div id='sign_in'>
      <Col md={6} xsOffset={3}>
        <h1>Sign In</h1>
        <form onSubmit={me.submit_form}>
          <Input type="email" bsSize="large" rel="input" placeholder="Email address" value={me.state.account.email} onChange={me.changeEmail} />
          <Input type="password" bsSize="large" rel="input" placeholder="Password" value={me.state.account.password} onChange={me.changePassword} />
          {
            if me.state.alert.show
              <Alert bsStyle={me.state.alert.type} onDismiss={me.handleAlertDismiss} dismissAfter={2000}>
                <p>{me.state.alert.message}</p>
              </Alert>
          }
          <ButtonInput onClick={me.submit_form} bsStyle="primary" bsSize="large">Sign in</ButtonInput> or <Link to="/sign_up">sign up</Link>.
        </form>
      </Col>
    </div>
