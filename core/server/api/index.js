var users = require('./users'),
  budgets = require('./budgets'),

  http;

http = function(apiMethod) {
  return function(req, res) {
    return apiMethod.call().then(function(result) {
      res.json(result || {});
    });
  }
}

module.exports = {
  users: users,
  budgets: budgets,
  http: http
}
