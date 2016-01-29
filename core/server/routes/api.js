var api = require('../api');

module.exports = function(server) {
  server.get('/api/v1.0/users/', api.http(api.users.browse));

  server.get('/api/v1.0/budgets/', api.http(api.budgets.browse));
}
