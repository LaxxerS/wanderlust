var dataProvider = require('../models'),

  users;

users = {
  browse: function browse() {
    return dataProvider.User.findAll();
  }
}

module.exports = users;
