var dataProvider = require('../models'),
  _ = require('lodash'),
  jwt = require('jsonwebtoken'),
  config = require('../config'),
  Promise = require('bluebird'),

  users;

users = {
  browse: function browse() {
    return dataProvider.User.findAll().then(function(users) {
      var i = 0,
        omitted = {};

      if (users) {
        omitted = users.toJSON();
      }

      for (i; i < omitted.length; i = i + 1) {
        omitted[i] = _.omit(omitted[i], ['password']);
      }

      return {
        users: omitted
      };
    });
  },

  read: function read(args) {
    return dataProvider.User.findOne(args).then(function(user) {
      var omitted;

      if (user) {
        omitted = user.toJSON();
        omitted = _.omit(omitted, ['password']);
        return {
          user: omitted
        };
      };
    });
  },

  check: function check(object) {
    var self = users;
    return dataProvider.User.check(object).then(function(user) {
      if(user) {
        var token = jwt.sign({ id: user.id }, config.token.secret),
          data;

        data = {
          'id': user.id,
          'token': token
        }
        
        return data;
      }
    }, function(error) {
      return Promise.reject({
        status: 400,
        type: 'client',
        message: error.message
      });
    });
  }
}

module.exports = users;
