var users = require('./users'),

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
  http: http
}
