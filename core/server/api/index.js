var _ = require('lodash'),

  users = require('./users'),
  budgets = require('./budgets'),
  expenses = require('./expenses'),
  tags = require('./tags'),
  colours = require('./colours'),

  http;

http = function(apiMethod) {
  return function(req, res) {
    var options = _.extend(req.body, req.query, req.params),
      apiContext = {
        user: req.session && req.session.user
      };

    return apiMethod.call(apiContext, options).then(function(result) {
      res.json(result || {});
    });
  }
}

module.exports = {
  users: users,
  budgets: budgets,
  expenses: expenses,
  tags: tags,
  colours: colours,
  http: http
}
