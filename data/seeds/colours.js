var uuid = require('node-uuid');

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('colours').del(),
    knex('colours').insert([{
      uuid: uuid.v4(),
      name: 'Turquoise',
      class: 'turquoise',
      hex: '#1ABC9C',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Emerald',
      class: 'emerald',
      hex: '#2ECC71',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Peter River',
      class: 'peter-river',
      hex: '#3498DB',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Amethyst',
      class: 'amethyst',
      hex: '#9B59B6',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Wet Asphalt',
      class: 'wet-asphalt',
      hex: '#34495E',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Green Sea',
      class: 'green-sea',
      hex: '#16A085',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Nephritis',
      class: 'nephritis',
      hex: '#27AE60',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Belize Hole',
      class: 'belize-hole',
      hex: '#2980B9',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Wisteria',
      class: 'wisteria',
      hex: '#8E44AD',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Dark Coffee',
      class: 'dark-coffee',
      hex: '#2C3E50',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Sun Flower',
      class: 'sun-flower',
      hex: '#F1C40F',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Carrot',
      class: 'carrot',
      hex: '#E67E22',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Alizarin',
      class: 'alizarin',
      hex: '#E74C3C',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Clouds',
      class: 'clouds',
      hex: '#ECF0F1',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Concreate',
      class: 'concreate',
      hex: '#95A5A6',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Orange',
      class: 'orange',
      hex: '#F39C12',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Pumpkin',
      class: 'pumpkin',
      hex: '#D35400',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Pomegranate',
      class: 'pomegranate',
      hex: '#C0392B',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Silver',
      class: 'silver',
      hex: '#BDC3C7',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    },
    {
      uuid: uuid.v4(),
      name: 'Asbestos',
      class: 'asbestos',
      hex: '#7F8C8D',
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    }])
  );
};
