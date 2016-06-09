describe('VirtualhostModel', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      Virtualhost.find()
      .then(function(results) {
        // some tests
        done();
      })
      .catch(done);
    });
  });

});
