bcrypt   = require 'bcrypt'
SALT_WORK_FACTOR = 10

Account = (mongoose) ->
  AccountSchema = mongoose.Schema
    name: String
    email: String
    password: String
  AccountSchema.pre 'save', (next) ->
    account = this
    return next() if !account.isModified('password')

    bcrypt.genSalt SALT_WORK_FACTOR, (err, salt) ->
      return next(err) if err
      bcrypt.hash account.password, salt, (err, hash) ->
        return next(err) if err
        account.password = hash
        next()
  Account = mongoose.model 'Account', AccountSchema
  Account
module.exports = Account
