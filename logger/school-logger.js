'use strict';

const clientSpcketIo = require('socket.io-client');

const school_logger = clientSpcketIo.connect('http://localhost:3000/school');

school_logger.on('message', payload=>{
  console.log(`school chat: ${payload}`);
});