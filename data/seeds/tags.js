var uuid = require('node-uuid');

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('tags').del(),
    knex('tags').insert([{
      uuid: uuid.v4(),
      name: 'Food & Beverages',
      colour_id: 1,
      user_id: 1,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Shopping',
      colour_id: 2,
      user_id: 1,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Misc',
      colour_id: 3,
      user_id: 2,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    }])
  );
};
