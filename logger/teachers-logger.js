'use strict';

const clientSpcketIo = require('socket.io-client');

const teacher_logger = clientSpcketIo.connect('http://localhost:3000/teacher');

teacher_logger.on('message', payload=>{
  console.log(`teachers chat ${payload}`);
});