
exports.up = function(knex, Promise) {
  return knex.schema.createTable('colours', function(t) {
    t.increments().primary();
    t.string('uuid', 36);
    t.string('name', 150);
    t.string('class', 150);
    t.string('hex', 150);
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('colours');
};
