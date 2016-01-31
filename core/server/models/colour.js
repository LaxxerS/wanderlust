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
  },
    // Relations
  tag: function tag() {
  	return this.hasMany('Tag', 'colour_id');
  }
}, {
  findAll: function findAll(options) {
    options = options || {};
    options.withRelated = ['tag'];
    return Lust.Model.findAll.call(this, options);
  },

  findOne: function findOne(args, options) {
    options = options || {};
    options.withRelated = ['tag'];
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
