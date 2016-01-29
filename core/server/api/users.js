var dataProvider = require('../models'),

  users;

users = {
  browse: function browse() {
    return dataProvider.User.findAll().then(function(users) {
      return {users: users};
    })
  }
}

module.exports = users;
