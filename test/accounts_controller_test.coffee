supertest = require 'supertest'
server = require '../app'
request = supertest(server)
chai = require 'chai'
expect = chai.expect

describe 'GET /sign_up', ->
  it 'should response text with response code 200.', (done) ->
    request.get('/sign_up').end (err, response) ->
      statusCode = response.statusCode
      body = response.text
      expect(response.statusCode).to.equal(200)
      done()