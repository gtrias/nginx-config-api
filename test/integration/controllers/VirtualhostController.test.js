var request = require('supertest');

describe('VirtualhostController', function() {

  describe('#get()', function() {
    it('should generate nginx config file', function (done) {
      request(sails.hooks.http.app)
        .get('/virtualhost')
        .expect(200, done)
        .end(function(err, res) {
          if (err) throw err;
          done();
        })
    });
  });

  describe('#nginx()', function() {
    it('should generate nginx config file', function (done) {
      request(sails.hooks.http.app)
        .get('/virtualhost/nginx')
        .expect(200, done)
        .end(function(err, res) {
          if (err) throw err;
          done();
        })
    });
  });

});

