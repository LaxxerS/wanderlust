var Lust = require('./base'),
  User = require('./user').User,
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
  owner: function() {
  	return this.belongsTo(User, 'user_id');
  }
}, {
  findAll: function(options) {
    options = options || {};
    options.withRelated = ['owner'];
    return Lust.Model.findAll.call(this, options);
  }
})

Budgets = Lust.Collection.extend({
	model: Budget
});

module.exports = {
	Budget: Budget,
	Budgets: Budgets
}
