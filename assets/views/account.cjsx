'use strict'
React = require 'react'
Router = require 'react-router'
Link = Router.Link

module.exports = React.createClass
  displayName: 'account'
  getInitialState: ->
    name: "test"
  submit_form: (e) ->
    console.log(e)
    e.preventDefault()
    console.log($)
  changeName: (e) ->
    console.log e
    @setState name: e.target.value
  render: ->
    me = this
    <div id='account'>
      <h1>{me.props.name}</h1>
      <h6>Sign up</h6>
      <Link to="dashboard">Back to Top</Link><br />
      <form onSubmit={me.submit_form}>
        <input type="text" value={me.state.name} onChange={me.changeName}/>
        <button onClick={me.submit_form}>Submit</button>
      </form>
    </div>
