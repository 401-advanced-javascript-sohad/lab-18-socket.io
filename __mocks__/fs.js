'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('sorry file invalid');
  }
};


exports.writeFile = (file, buffer, cb) => {
  if (file.match(/bad/i)) {
    cb('sorry file invalid ');
    return Buffer.from('File Contents');
  }
};