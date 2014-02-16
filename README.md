# handshakejs-nodejs

Makes it easier to interact with handshakejs from nodejs.

IMPORTANT: Requires Node.js `0.10.x` or greater.

[![BuildStatus](https://travis-ci.org/scottmotte/handshakejs-nodejs.png?branch=master)](https://travis-ci.org/scottmotte/handshakejs-nodejs)
[![NPM version](https://badge.fury.io/js/handshakejs.png)](http://badge.fury.io/js/handshakejs)

```javsacript
var handshakejs = require('handshakejs')('your_handshakejs_salt');
handshakejs.validate({email: email, hash: hash}, function(err, resp) {
  if (err) { console.log(err); }

  console.log(resp);
});
```

## Running Tests

```
npm test
```

## Publish to NPM

```
npm publish
```
