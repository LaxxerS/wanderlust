
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('budgets').del(),
    knex('budgets').insert([{
      uuid: 'a72b31f4-ee32-4552-a6f8-059890cdd84b',
      name: 'Febuary',
      type: 'monthly',
      amount: '250.00',
      user_id: 1,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: '413f3ca9-e124-47be-adca-d304b88396d8',
      name: 'Bangkok Trip',
      type: 'event',
      amount: '1700.00',
      user_id: 1,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: '44ed0686-80eb-4a80-bc30-20528b0f3e15',
      name: 'March',
      type: 'monthly',
      amount: '300.00',
      user_id: 2,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    }])
  );
};
