var knex = require('../models/base').knex,

  init;

init = function() {
  knex.schema.hasTable('users').then(function(exists) {
    if(!exists) {
      return knex.schema.createTable('users', function(t) {
        t.increments('id').primary();
        t.string('uuid', 36);
        t.string('username', 150);
        t.string('password', 60);
        t.string('email', 254);
        t.string('image', 2000);
        t.timestamps();
      })
    }
  })
}

module.exports = {
  init: init
}
