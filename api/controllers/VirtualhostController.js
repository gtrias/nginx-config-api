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
    .populateAll()
    .then(function (virtualhosts) {
        var locations = Location.find()
        .populate('backends')
        .then(function (locations){
            return locations;
        });
        return [virtualhosts, locations];
    })
    .spread(function (virtualhosts, locations) {
      if (locations === undefined) {
        return res.view('nginx', {
          virtualhosts: virtualhosts
        });
      }

      locations = _.indexBy(locations, 'virtualhost');
      virtualhosts = _.indexBy(virtualhosts, 'id');

      console.log('-------------locations-------------');
      console.log(locations);

      console.log('-------------virtualhosts----------');
      console.log(virtualhosts);


      var vhostsConverted = [];

      for (var i in virtualhosts) {
        console.log(virtualhosts[i]);
        virtualhosts[i].locations = locations[virtualhosts[i].id]; // It will work now
      }

      console.log('-------------virtualhosts populed----------');
      console.log(vhostsConverted);

      return res.view('nginx', {
        virtualhosts: virtualhosts
      });
    }).catch(function (err){
        if (err) return res.serverError(err);
    });


  }

};

