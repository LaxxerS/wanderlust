
exports.up = function(knex, Promise) {
  return knex.schema.createTable('budgets', function(t) {
    t.increments().primary();
    t.string('uuid', 36);
    t.string('name', 150);
    t.string('type', 60);
    t.float('amount');
    t.integer('user_id');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return kenx.schema.dropTable('budgets');
};
