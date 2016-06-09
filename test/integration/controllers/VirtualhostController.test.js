var request = require('supertest');

describe('VirtualhostController', function() {

  describe('#get()', function() {
    it('should generate nginx config file', function (done) {
      this.timeout(15000);
      request(sails.hooks.http.app)
        .get('/virtualhost')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
        })
    });
  });

  describe('#nginx()', function() {
    it('should generate nginx config file', function (done) {
      this.timeout(15000);
      request(sails.hooks.http.app)
        .get('/virtualhost/nginx')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
        })
    });
  });

});

