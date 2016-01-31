var Promise = require('bluebird'),
  bcrypt = require('bcryptjs'),

  Lust = require('./base'),

  bcryptGenSalt = Promise.promisify(bcrypt.genSalt),
  bcryptHash = Promise.promisify(bcrypt.hash),
  bcryptCompare = Promise.promisify(bcrypt.compare),

  User,
  Users;

function generatePasswordHash(password) {
  return bcryptGenSalt().then(function(salt) {
    return bcryptHash(password, salt);
  });
}

User = Lust.Model.extend({
  tableName: 'users',

  initialize: function() {
    this.on('saving', this.saving);
  },

  saving: function() {
    Lust.Model.prototype.saving.call(this);
  },

  tags: function tags() {
    return this.hasMany('Tag', 'user_id');
  },

  budgets: function() {
    return this.hasMany('Budget', 'user_id');
  }
}, {
  findAll: function(options) {
    options = options || {};
    options.withRelated = ['budgets', 'budgets.expenses', 'tags', 'tags.colour'];
    return Lust.Model.findAll.call(this, options);
  },

  findOne: function(args, options) {
    options = options || {};
    options.withRelated = ['budgets', 'budgets.expenses', 'tags', 'tags.colour'];
    return Lust.Model.findOne.call(this, args, options);
  },

  check: function check(object) {
    var self = this;
    return this.getByUsername(object.username).then(function then(user) {
      if(!user) {
        return Promise.reject(new Error('The email and password you entered don\'t match.'));
      }

      return bcryptCompare(object.password, user.get('password')).then(function then(matched) {
        if(!matched) {
          return Promise.reject(new Error('The email and password you entered don\'t match.'));
        }

        return user;
      })
    });
  },

  getByUsername: function getByUsername(username) {
    return Users.forge().fetch({require: true}).then(function then(users) {
      var exist = users.find(function findUser(user) {
        return user.get('username').toLowerCase() === username.toLowerCase();
      });
      if(exist) {
        return exist;
      }
    })
  }
})

Users = Lust.Collection.extend({
  model: User
});

module.exports = {
  User: Lust.model('User', User),
  Users: Lust.collection('Users', Users),
}
