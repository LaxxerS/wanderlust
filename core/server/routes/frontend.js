var frontend = require('../controllers/frontend');

module.exports = function(server) {
  server.get('/', frontend.index);
}
