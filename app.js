var restify = require('restify');

var server = restify.createServer();

// Loading datastore
var Datastore = require('nedb'),
    db = new Datastore({ filename: 'data/hosts.db' });

db.loadDatabase();

server.put('/virtualhost/:url', function virtualHostPost(req, res, next) {
  console.log(req.params.url);
  doc = {
    name: req.params.url
  }
  db.insert(doc, function (err, newDoc) {   // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
  });
  res.status(201);
  res.send(req.params.url);
  next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
