var express = require('express'),
  routes = require('./routes'),
  models = require('./models'),

  server = express();

function init() {
  routes.frontend(server);
  routes.api(server);
  models.init();
  server.set('port', process.env.PORT || 3000);
  server.listen(server.get('port'), function() {
    console.log('\nServer listening on port ' + server.get('port'));
    console.log('Ctrl-C to shut down server');
  });
}

module.exports = init;
