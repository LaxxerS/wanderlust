var Lust = require('./base'),

  Expense,
  Expenses;

Expense = Lust.Model.extend({
  tableName: 'expenses',

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

  budget: function budget() {
    return this.belongsTo('Budget', 'budget_id');
  }
}, {
  findAll: function findAll(options) {
    options = options || {};
    options.withRelated = ['user', 'budget'];
    return Lust.Model.findAll.call(this, options);
  },

  findOne: function findOne(args, options) {
    options = options || {};
    options.withRelated = ['user', 'budget'];
    return Lust.Model.findOne.call(this, args, options);
  }
});

Expenses = Lust.Collection.extend({
	model: Expense
});

module.exports = {
  Expense: Lust.model('Expense', Expense),
	Expenses: Lust.collection('Expenses', Expenses),
}
