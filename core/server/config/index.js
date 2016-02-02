var path = require('path'),
  _ = require('lodash'),

  appRoot = path.resolve(__dirname, '../../../'),
  corePath = path.resolve(appRoot, 'core/'),
  clientPath = path.resolve(corePath, 'client/'),

  config = {};

_.merge(config, {
  paths: {
    appRoot: appRoot,
    corePath: corePath,
    clientPath: clientPath
  },

  token: {
    secret: 'dreams&travels'
  }
});

module.exports = config;
