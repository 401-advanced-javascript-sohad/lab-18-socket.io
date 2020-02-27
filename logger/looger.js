'use strict';
const clientSpcketIo = require('socket.io-client');

const logger = clientSpcketIo.connect('http://localhost:3000');

logger.on('message', payload=>{
  console.log(`I listen to you: ${payload}`);
});