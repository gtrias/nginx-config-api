var restify = require('restify');

function virtualHostPost(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.post('/virtualhost/:url', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
