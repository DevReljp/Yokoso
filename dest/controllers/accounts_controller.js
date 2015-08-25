(function() {
  var AccountsController;

  AccountsController = function(app, mongoose) {
    var Account;
    Account = require('../models/account')(mongoose);
    return app.post('/accounts', function(req, res) {
      var account;
      res.contentType('application/json');
      account = new Account(req.body);
      return account.save().then(function(err) {
        console.log('success', account.name);
        return res.send(JSON.stringify(account));
      }, function(err) {
        return console.log("Error", err);
      });
    });
  };

  module.exports = AccountsController;

}).call(this);
