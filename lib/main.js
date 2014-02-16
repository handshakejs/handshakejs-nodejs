"use strict";

var package_json  = require('./../package.json');
var fs            = require('fs');
var crypto        = require('crypto');

var handshakejs = function(salt) {

  if( !(this instanceof handshakejs) ) {
    return new handshakejs(salt);
  }

  var _this = this;

  var validate = function(params, fn) {
    crypto.pbkdf2(params.email, _this.salt, _this.iterations, _this.key_length, function(err, hash) {
      if (err) { return fn(err, null); }

      var result = params.hash === hash.toString('hex');
      if (result) {
        return fn(null, result);
      } else {
        var error = new Error("Invalid match");
        return fn(error, null);
      }
    });
  }

  this.iterations = 1000;
  this.key_length = 16;
  this.version    = package_json.version;
  this.salt       = salt;
  this.validate   = validate;

  return this;
}

module.exports = handshakejs;
