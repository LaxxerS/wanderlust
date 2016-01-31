
exports.up = function(knex, Promise) {
  return knex.schema.createTable('expenses', function(t) {
    t.increments().primary();
    t.string('uuid', 36);
    t.float('amount');
    t.text('remarks');
    t.integer('user_id');
    t.integer('budget_id');
    t.integer('tag_id');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('expenses');
};
