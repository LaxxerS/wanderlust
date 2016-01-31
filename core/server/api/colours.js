var dataProvider = require('../models'),

  colours;

colours = {
  browse: function browse() {
    return dataProvider.Colour.findAll().then(function(colours) {
      return {
        colours: colours
      };
    });
  },

  read: function(args) {
    return dataProvider.Colour.findOne(args).then(function(colour) {
        return {
          colour: colour
        };
    });
  }
}

module.exports = colours;
