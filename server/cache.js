const LRU = require('lru-cache');

const options = {
  max: 10000000,
  length: (n) => n.length,
};

const cache = new LRU(options);

module.exports = {
  cache,
};
