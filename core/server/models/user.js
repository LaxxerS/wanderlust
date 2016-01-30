var Lust = require('./base'),

  User,
  Users;

User = Lust.Model.extend({
  tableName: 'users',

  initialize: function() {
    this.on('saving', this.saving);
  },

  saving: function() {
    Lust.Model.prototype.saving.call(this);
  },

  budgets: function() {
    return this.hasMany('Budget', 'user_id');
  }
}, {
  findAll: function(options) {
    options = options || {};
    options.withRelated = ['budgets'];
      return Lust.Model.findAll.call(this, options);
  }
})

Users = Lust.Collection.extend({
	model: User
});

module.exports = {
  User: Lust.model('User', User),
	Users: Lust.collection('Users', Users),
}
