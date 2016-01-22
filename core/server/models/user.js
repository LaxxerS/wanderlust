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
  }
}, {
  findAll: function(options) {
    options = options || {};
      return Lust.Model.findAll.call(this, options);
  }
})

Users = Lust.Collection.extend({
	model: User
});

module.exports = {
	User: User,
	Users: Users
}
