var restify = require('restify');
var assert = require('assert');

// init the test client
var client = restify.createJsonClient({
  url: 'http://127.0.0.1:8080',
  version: '*'
});

// Test #1
describe('200 response check', function() {
    it('should get a 200 response', function(done) {
      var virtualHostExample = {
        name: "somedomain.com",
        locations: [
          {
            id: '123',
            path: '/somepath',
            backends: [
              {
                ip: '123.123.123.123',
                ports: '80'
              }
            ]
          }
        ]
      };

      client.put('/virtualhost/somedomain.com', virtualHostExample, function(err, req, res, data) {
          if (err) {
              throw new Error(err);
          } else {
              if (res.statusCode != 200) {
                  throw new Error('invalid response from /virtualhost/example.com');
              }
              done();
          }
      });
    });
});
