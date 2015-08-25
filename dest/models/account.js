(function() {
  var Account, SALT_WORK_FACTOR, bcrypt;

  bcrypt = require('bcrypt');

  SALT_WORK_FACTOR = 10;

  Account = function(mongoose) {
    var AccountSchema;
    AccountSchema = mongoose.Schema({
      name: String,
      email: String,
      password: String
    });
    AccountSchema.pre('save', function(next) {
      var account;
      account = this;
      if (!account.isModified('password')) {
        return next();
      }
      return bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) {
          return next(err);
        }
        return bcrypt.hash(account.password, salt, function(err, hash) {
          if (err) {
            return next(err);
          }
          account.password = hash;
          return next();
        });
      });
    });
    Account = mongoose.model('Account', AccountSchema);
    return Account;
  };

  module.exports = Account;

}).call(this);
