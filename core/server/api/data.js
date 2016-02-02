var _ = require('lodash'),
  dataProvider = require('../models'),

  data;

data = {
  browse: function browse(args) {
    return dataProvider.User.findAll().then(function(users) {
      return dataProvider.Colour.findAll().then(function(colours) {
        return dataProvider.User.findOne(args).then(function(user) {
          return {
            users: users,
            current: user,
            colours: colours
          }
        })
      })
    });
  }
}

module.exports = data;
