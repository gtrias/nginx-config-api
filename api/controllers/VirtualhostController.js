/**
 * VirtualhostController
 *
 * @description :: Server-side logic for managing virtualhosts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// Find the 5 hottest oven brands on the market
/* Oven.find().sort('heat ASC').exec(function (err, ovens){
  if (err) return res.serverError(err);

  return res.view('oven/top5', {
    hottestOvens: ovens
  });
  // -> responds using the view at `views/oven/top5.ejs`,
  // and with the oven data we looked up as view locals.
  //
  // e.g. in the view, we might have something like:
  // ...
  // <% _.each(hottestOvens, function (aHotOven) { %>
  //  <li><%= aHotOven.name %></li>
  // <% }) %>
  // ...
}); */

module.exports = {
  nginx: function (req, res) {

    Virtualhost
      .find()
      .populate('aliases')
      .populate('locations')
      .then(function(virtualhost) {
        var locationBackends = Location.find({
            id: _.pluck(virtualhost.locations, 'backends')
              //_.pluck: Retrieves the value of a 'user' property from all elements in the virtualhost.locations collection.
          })
          .then(function(locationBackends) {
            return locationBackends;
          });
        return [virtualhost, locationBackends];
      })
      .spread(function(virtualhost, locationBackends) {
        locationBackends = _.indexBy(locationBackends, 'id');
        //_.indexBy: Creates an object composed of keys generated from the results of running each element of the collection through the given callback. The corresponding value of each key is the last element responsible for generating the key
        virtualhost.locations = _.map(virtualhost.locations, function(location) {
          location.backedn = locationBackends[location.backend];
          return location;
        });
        // res.json(virtualhost);
        var virtualhosts = JSON.stringify(virtualhost);
        return res.view("nginx", {virtualhosts: JSON.parse(virtualhosts)});
      })
      .catch(function(err) {
        return res.serverError(err);
      });

  }
};

