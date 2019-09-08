const { sanitizeQuery } = require('express-validator');

module.exports = [
  sanitizeQuery(['page', 'itemsPerPage']).toInt()
];