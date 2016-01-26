
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
    t.increments().primary();
    t.string('uuid', 36);
    t.string('name', 150);
    t.string('username', 150);
    t.string('password', 60);
    t.string('email', 254);
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
