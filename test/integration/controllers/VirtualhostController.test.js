var request = require('supertest');

describe('VirtualhostController', function() {

  describe('#post()', function() {
    it('should create new virtualhost', function (done) {
      payload = {
        "name": "genar.me",
        "portsPlain": "80",
        "locations": {
          "path": "/",
          "backends": [
          {
            "ip": "8.8.8.8",
            "ports": "80"
          },
          {
            "ip": "8.8.8.6",
            "ports": "8080"
          }

          ]
        }
      };

      payload = JSON.stringify(payload);

      request(sails.hooks.http.app)
        .post('/virtualhost')
        .set('Content-Type', 'application/json')
        .send(payload)
        .end(function(err, res) {
          if (err) throw err;
          done();
        })
        .expect(201)
    });
  });

  describe('#get()', function() {
    it('should retrieve virtuahlhost collection', function (done) {
      request(sails.hooks.http.app)
        .get('/virtualhost')
        .expect(200)
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

