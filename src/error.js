'use strict';
const events = require('../src/events.js');


function log(event, payload) {
  let tErr = new Date();
  console.log({ event, tErr, payload });
}

events.on('error', log);