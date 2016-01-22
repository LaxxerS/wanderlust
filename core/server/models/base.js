var bookshelf = require('bookshelf'),
  knex = require('knex'),

  Lust;

Lust = bookshelf(knex({
  client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
  }
}));

Lust.Model = Lust.Model.extend({
    hasTimestamps: true,

    saving: function() {
      this.set('uuid', uuid.v4());
    }
}, {
  findAll: function(options, args) {
    options = options || {};
    return Lust.Collection.forge({}, { model: this }).fetch(options);
  },

  findOne: function(args, options) {
    options = options || {};
    return this.forge(args).fetch(options);
  },

  add: function(object) {
    var instance = this.forge(object);
    return instance.save(null);
  }
});

module.exports = Lust;
