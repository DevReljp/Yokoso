AccountsController = (app, mongoose) ->
  Account = require('../models/account')(mongoose)
  app.post '/accounts', (req, res) ->
    res.contentType 'application/json'
    account = new Account(req.body)
    account.save()
    .then (err) ->
      console.log('success', account.name)
      res.send JSON.stringify(account)
    , (err) ->
      console.log("Error", err)

module.exports = AccountsController
