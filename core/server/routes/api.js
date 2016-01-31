var api = require('../api');

module.exports = function(server) {
  // ## Users
  server.get('/api/v1.0/users/', api.http(api.users.browse));
  server.get('/api/v1.0/users/:id', api.http(api.users.read));

  // ## Budgets
  server.get('/api/v1.0/budgets/', api.http(api.budgets.browse));
  server.get('/api/v1.0/budgets/:id', api.http(api.budgets.read));

  // ## Expenses
  server.get('/api/v1.0/expenses/', api.http(api.expenses.browse));
  server.get('/api/v1.0/expenses/:id', api.http(api.expenses.read));

  // ## Tags
  server.get('/api/v1.0/tags/', api.http(api.tags.browse));
  server.get('/api/v1.0/tags/:id', api.http(api.tags.read));

  // ## Colours
  server.get('/api/v1.0/colours/', api.http(api.colours.browse));
  server.get('/api/v1.0/colours/:id', api.http(api.colours.read));

  // ## authentications
  server.post('/api/v1.0/authentications/', api.http(api.users.check));
}
