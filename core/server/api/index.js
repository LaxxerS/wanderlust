var _ = require('lodash'),

  users = require('./users'),
  budgets = require('./budgets'),
  expenses = require('./expenses'),
  tags = require('./tags'),
  colours = require('./colours'),
  data = require('./data'),

  http;

http = function(apiMethod) {
  return function(req, res) {
    var options = _.extend(req.body, req.query, req.params),
      apiContext = {
        user: req.session && req.session.user
      };

    return apiMethod.call(apiContext, options).then(function(result) {
      res.json(result || {});
    }).catch(function(error) {
      res.status(error.status).send({ status: error.status, message: error.message, type: error.type });
    });
  }
}

module.exports = {
  users: users,
  budgets: budgets,
  expenses: expenses,
  tags: tags,
  colours: colours,
  data: data,
  http: http
}
