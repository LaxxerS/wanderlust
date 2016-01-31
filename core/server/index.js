var express = require('express'),
  hbs = require('express-hbs'),
  path = require('path'),
  bodyParser = require('body-parser');

  routes = require('./routes'),
  models = require('./models'),

  appRoot = path.resolve(__dirname, '../../'),
  corePath = path.resolve(appRoot, 'core/'),
  clientPath = path.resolve(corePath, 'client/'),

  server = express();

function init() {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // ## Static files
  server.use('/assets', express.static(clientPath));

  models.init();

  // ## Setup view engine
  server.engine('hbs', hbs.express4());
  server.set('view engine', 'hbs');
  server.set('views', __dirname + '/views');

  // ## Routing
  routes.frontend(server);
  routes.api(server);

  server.set('port', process.env.PORT || 3000);
  server.listen(server.get('port'), function() {
    console.log('\nServer listening on port ' + server.get('port'));
    console.log('Ctrl-C to shut down server');
  });
}

module.exports = init;
