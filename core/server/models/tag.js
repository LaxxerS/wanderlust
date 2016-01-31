var Lust = require('./base'),

  Tag,
  Tags;

Tag = Lust.Model.extend({
  tableName: 'tags',

  initialize: function() {
    this.on('saving', this.saving);
  },

  saving: function() {
    Lust.Model.prototype.saving.call(this);
  },
    // Relations
  user: function user() {
  	return this.belongsTo('User', 'user_id');
  },

  expenses: function budget() {
    return this.hasMany('Expense', 'tag_id');
  },

  colour: function colour() {
    return this.belongsTo('Colour', 'colour_id');
  }
}, {
  findAll: function findAll(options) {
    options = options || {};
    options.withRelated = ['user', 'expenses', 'colour'];
    return Lust.Model.findAll.call(this, options);
  },

  findOne: function findOne(args, options) {
    options = options || {};
    options.withRelated = ['user', 'expenses', 'colour'];
    return Lust.Model.findOne.call(this, args, options);
  }
});

Tags = Lust.Collection.extend({
	model: Tag
});

module.exports = {
  Tag: Lust.model('Tag', Tag),
	Tags: Lust.collection('Tags', Tags),
}
