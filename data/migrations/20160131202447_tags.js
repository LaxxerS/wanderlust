
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', function(t) {
    t.increments().primary();
    t.string('uuid', 36);
    t.string('name', 150);
    t.integer('colour_id');
    t.integer('user_id');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags');
};
