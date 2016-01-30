var Lust = require('./base'),

  Budget,
  Budgets;

Budget = Lust.Model.extend({
  tableName: 'budgets',

  initialize: function() {
    this.on('saving', this.saving);
  },

  saving: function() {
    Lust.Model.prototype.saving.call(this);
  },
    // Relations
  user: function() {
  	return this.belongsTo('User', 'user_id');
  }
}, {
  findAll: function(options) {
    options = options || {};
    options.withRelated = ['user'];
    return Lust.Model.findAll.call(this, options);
  }
})

Budgets = Lust.Collection.extend({
	model: Budget
});

module.exports = {
  Budget: Lust.model('Budget', Budget),
	Budgets: Lust.collection('Budgets', Budgets),
}
