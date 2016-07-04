var restify = require('restify'),
    config = require('config'),
    Datastore = require('nedb');

// if (process.env.NODE_ENV === 'production') {
  var db = new Datastore({ filename: config.get('datastore'), autoload: true });
// } else {
  // var db = new Datastore();
// }

// restify instance.
var server = restify.createServer();

// Loading datastore
db.loadDatabase();

db.ensureIndex({ fieldName: 'name', unique: true }, function (err) {
});


server.put('/virtualhost/:url', function virtualHostPost(req, res, next) {
  console.log("Pushing " + req.params.url);

  doc = {
    name: req.params.url
  }

  db.insert(doc, function (err) {
    // console.log(err);
    console.log(doc);
    if (err) {
      db.update({ name: req.params.url }, doc, { returnUpdatedDocs: true }, function (err, numReplaced, doc) {
        if (numReplaced > 0) {
          console.log('VirtualHost updated');
        }

        // Counting how many documents with this id are
        db.count({ _id: doc._id }, function (err, count) {
          console.log('There are %s documents with this id %s', count, doc._id);
          // count equals to 3
          res.send(doc);
        });
      });
    }

    res.send(doc);
  });

  res.status(200);
  next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
