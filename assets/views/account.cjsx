'use strict'
React = require 'react'
Addons = require 'react/addons'
Router = require 'react-router'
Bootstrap = require 'react-bootstrap'
Link = Router.Link
Col = Bootstrap.Col
Input = Bootstrap.Input
ButtonInput = Bootstrap.ButtonInput
Alert = Bootstrap.Alert

TransitionHook = Router.TransitionHook
Navigation     = Router.Navigation

module.exports = React.createClass
  displayName: 'account'
  mixins: [Navigation, TransitionHook]
  getInitialState: ->
    account:
      name:     ""
      email:    ""
      password: ""
    alert:
      show: false
      message: ""
      type: ""
  submit_form: (e) ->
    e.preventDefault()
    data = this.state.account
    me = this
    jQuery.ajax
      data: data
      url: '/accounts'
      type: 'post'
      dataType: 'json'
    .then (data) ->
      me.setState React.addons.update me.state, alert:
        show: $set: true
        message: $set: "Registration successful"
        type: $set: "success"
      me.transitionTo '/sign_in'
      console.log data
    , (error) ->
      console.log error
  handleAlertDismiss: (e) ->
    @setState React.addons.update @state, alert:
      show: $set: false
  changeAccountName: (e) ->
    @setState React.addons.update @state, account:
      name: $set: e.target.value
  changeEmail: (e) ->
    @setState React.addons.update @state, account:
      email: $set: e.target.value
  changePassword: (e) ->
    @setState React.addons.update @state, account:
      password: $set: e.target.value
  render: ->
    me = this
    <div id='account'>
      <Col md={6} xsOffset={3}>
        <h1>Sign up</h1>
        <form onSubmit={me.submit_form}>
          <Input type="text" bsSize="large" rel="input" placeholder="User name" value={me.state.account.name} onChange={me.changeAccountName} />
          <Input type="email" bsSize="large" rel="input" placeholder="Email address" value={me.state.account.email} onChange={me.changeEmail} />
          <Input type="password" bsSize="large" rel="input" placeholder="Password" value={me.state.account.password} onChange={me.changePassword} />
          {
            if me.state.alert.show
              <Alert bsStyle={me.state.alert.type} onDismiss={me.handleAlertDismiss} dismissAfter={2000}>
                <p>{me.state.alert.message}</p>
              </Alert>
          }
          <ButtonInput onClick={me.submit_form} bsStyle="primary" bsSize="large">Register</ButtonInput> or <Link to="/sign_in">Sign in</Link>.
        </form>
      </Col>
    </div>
