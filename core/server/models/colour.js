var Lust = require('./base'),

  Colour,
  Colours;

Colour = Lust.Model.extend({
  tableName: 'colours',

  initialize: function() {
    this.on('saving', this.saving);
  },

  saving: function() {
    Lust.Model.prototype.saving.call(this);
  }
}, {
  findAll: function findAll(options) {
    options = options || {};
    return Lust.Model.findAll.call(this, options);
  },

  findOne: function findOne(args, options) {
    options = options || {};
    return Lust.Model.findOne.call(this, args, options);
  }
});

Colours = Lust.Collection.extend({
	model: Colour
});

module.exports = {
  Colour: Lust.model('Colour', Colour),
	Colours: Lust.collection('Colours', Colours),
}
