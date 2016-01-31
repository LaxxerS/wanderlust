var uuid = require('node-uuid');

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('expenses').del(),
    knex('expenses').insert([{
      uuid: uuid.v4(),
      amount: '140',
      remarks: '',
      user_id: 1,
      budget_id: 1,
      tag_id: 1,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      amount: '20',
      remarks: '',
      user_id: 1,
      budget_id: 2,
      tag_id: null,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      amount: '4.40',
      remarks: 'Lunch at birdnest',
      user_id: 2,
      budget_id: 3,
      tag_id: 2,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    }
    ])
  );
};
