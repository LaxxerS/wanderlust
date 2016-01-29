
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('users').insert([{
      uuid: '6acf10a0-68b4-4b4f-b64f-c30c5ae270d5',
      name: 'Tracy J. Stein',
      username: 'tracystein',
      password: '$2a$10$bCWZcLEPkyzqEROYXXqAKeBlyF8T2QJ0iYPGPgtg2MtT8Sxu3jLcy',
      email: 'tracystein@gmail.com',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: 'f0a2bb9f-6ea4-4857-91d4-c1a1a9419312',
      name: 'Chris P. Jordan',
      username: 'chrisjordan',
      password: '$2a$10$bCWZcLEPkyzqEROYXXqAKeBlyF8T2QJ0iYPGPgtg2MtT8Sxu3jLcy',
      email: 'chrisjordan@gmail.com',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: 'd02c3c30-1c10-4bc7-95c7-d638b92e5b34',
      name: 'Steven J. Mundy',
      username: 'stevenmundy',
      password: '$2a$10$bCWZcLEPkyzqEROYXXqAKeBlyF8T2QJ0iYPGPgtg2MtT8Sxu3jLcy',
      email: 'stevenmundy@gmail.com',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    }])
  );
};
