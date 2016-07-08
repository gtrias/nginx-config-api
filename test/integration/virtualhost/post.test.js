var restify = require('restify');
var assert = require('assert');

// init the test client
var client = restify.createJsonClient({
  url: 'http://127.0.0.1:8080',
  version: '*'
});

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

// Test #1
describe('/virtualhost PUT', function() {
    it('should get a 200 response', function(done) {
      client.put('/virtualhost/somedomain.com', virtualHostExample, function(err, req, res, data) {
          if (err) {
              throw new Error(err);
          } else {
              if (res.statusCode != 200) {
                  throw new Error('invalid response from /virtualhost/example.com');
              }
          }
          return done();
      });
    });

    it('should get a 200 response for a second request (update)', function(done) {
      client.put('/virtualhost/somedomain.com', virtualHostExample, function(err, req, res, data) {
          if (err) {
              throw new Error(err);
          } else {
              if (res.statusCode != 200) {
                  throw new Error('invalid response from /virtualhost/example.com');
              }
          }
          return done();
      });
    });

});
