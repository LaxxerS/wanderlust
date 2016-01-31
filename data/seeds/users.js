var uuid = require('node-uuid');

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('users').insert([{
      uuid: uuid.v4(),
      name: 'Tracy J. Stein',
      username: 'tracystein',
      password: '$2a$10$bCWZcLEPkyzqEROYXXqAKeBlyF8T2QJ0iYPGPgtg2MtT8Sxu3jLcy',
      email: 'tracystein@gmail.com',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Chris P. Jordan',
      username: 'chrisjordan',
      password: '$2a$10$bCWZcLEPkyzqEROYXXqAKeBlyF8T2QJ0iYPGPgtg2MtT8Sxu3jLcy',
      email: 'chrisjordan@gmail.com',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Steven J. Mundy',
      username: 'stevenmundy',
      password: '$2a$10$bCWZcLEPkyzqEROYXXqAKeBlyF8T2QJ0iYPGPgtg2MtT8Sxu3jLcy',
      email: 'stevenmundy@gmail.com',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    }])
  );
};
