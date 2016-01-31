var dataProvider = require('../models'),
  _ = require('lodash'),

  tags;

tags = {
  browse: function browse() {
    return dataProvider.Tag.findAll().then(function(tags) {
      var i = 0,
        omitted = {};

      if (tags) {
        omitted = tags.toJSON();
      }

      for (i; i < omitted.length; i = i + 1) {
        omitted[i].user = _.omit(omitted[i].user, ['password']);
      }

      return {
        tags: omitted
      };
    })
  },

  read: function(args) {
    return dataProvider.Tag.findOne(args).then(function(tag) {
      var omitted;

      if (tag) {
        omitted = tag.toJSON();
        omitted.user = _.omit(omitted.user, ['password']);
        return {
          tag: omitted
        };
      }
    });
  }
}

module.exports = tags;
