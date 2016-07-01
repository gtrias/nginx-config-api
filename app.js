var restify = require('restify');

var server = restify.createServer();

server.put('/virtualhost/:url', function virtualHostPost(req, res, next) {
  console.log(req.params.url);
  res.status(201);
  res.send(req.params.url);
  next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
