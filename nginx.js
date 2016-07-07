var NginxConfFile = require('nginx-conf').NginxConfFile;
var fs = require('fs');
var ejs = require('ejs');
var _ = require("underscore");

exports.generateConfFile = function (virtualHosts) {

  fs.readFile('./views/nginx.ejs', function (err, template) {
    if (err) {
      throw err;
    }

    console.log('Virtualhosts for nginx: ');
    console.log(virtualHosts);

    var view = ejs.render(
        template.toString(),
        {
          virtualhosts: virtualHosts,
          _: _
        },
        {}
    );

    fs.writeFile('./data/nginx.conf', view);
  });

}
