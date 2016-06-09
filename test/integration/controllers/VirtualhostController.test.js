var request = require('supertest');

describe('VirtualhostController', function() {

  describe('#nginx()', function() {
    it('should generate nginx config file', function (done) {
      request(sails.hooks.http.app)
        .get('/virtualhost/nginx')
        .expect(200)
    });
  });

});

