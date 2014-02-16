var SALT        = "1234";

var assert      = require('assert'),
    should      = require('should'),
    handshakejs = require('../lib/main')(SALT);

var result;

describe('handshakejs', function() {
  before(function() {
    result = handshakejs;
  });

  it('version should be set', function() {
    result.version.should.eql("0.0.1"); 
  });

  it('salt should be set', function() {
    result.salt.should.eql("1234"); 
  });

  it('iterations should be set', function() {
    result.iterations.should.eql(1000); 
  });

  it('key_length should be set', function() {
    result.key_length.should.eql(16); 
  });

  it('is valid against against a correct email, hash combination', function(done) {
    var email = "scott@mailinator.com";
    var hash = "852874208fc66f6c404b6150e2bf3fba";
    handshakejs.validate({email: email, hash: hash}, function(err, resp) {
      console.log(err);
      should.not.exist(err);

      done();
    });
  });

  it('is invalid against against with an incorrect email', function(done) {
    var email = "wrong@email.com";
    var hash = "852874208fc66f6c404b6150e2bf3fba";
    handshakejs.validate({email: email, hash: hash}, function(err, resp) {
      should.exist(err);
      done();
    });
  });

  it('is invalid against against with an incorrect email', function(done) {
    var email = "scott@mailinator.com";
    var hash = "wrong_hash";
    handshakejs.validate({email: email, hash: hash}, function(err, resp) {
      should.exist(err);
      done();
    });
  });
});
