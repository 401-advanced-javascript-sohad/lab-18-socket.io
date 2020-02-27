/* eslint-disable no-unused-vars */
/* eslint-disable strict */
'use strict';

const fs = require('fs');
const event = require('./src/events.js');

require('./src/logger.js');
require('./src/error.js');

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, changeCase(data));
    });
};
///////////////////////////////////////////Upper Case//////////////////////////////////////////////////

function changeCase(data) {
  return data.toUpperCase();
}


////////////////////////////////////////// reading file ///////////////////////////////////////////////


function readFile(file) {

  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        event.emit('error', 'sorry error in reading the file', `${err}`);
      }
      event.emit('log', 'good read File', `${file} file saved`);
      resolve(data.toString());
    });

  });

}

////////////////////////////////////////// editing file ///////////////////////////////////////////////

function writeFile(file, text) {

  return new Promise((resolve, reject) => {

    fs.writeFile(file, Buffer.from(text), (err, data) => {
      if (err) {
        event.emit('error', 'sorry error when write File ', `${err}`);
      }
      resolve(event.emit('log', 'writeFile', `${file} saved`));
    });
  });
}

let file = process.argv.slice(2).shift();
alterFile(file);