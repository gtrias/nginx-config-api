var restify = require('restify');
var assert = require('assert');

// init the test client
var client = restify.createJsonClient({
  url: 'http://127.0.0.1:8080',
  version: '*'
});

// Test #1
describe('201 response check', function() {
    it('should get a 201 response', function(done) {
        client.put('/virtualhost/example.com', { hello: 'world' }, function(err, req, res, data) {
            if (err) {
                throw new Error(err);
            }
            else {

                if (data.code != 200) {
                    throw new Error('invalid response from /post');
                }
                done();
            }
        });
    });
});
