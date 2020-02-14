'use strict';

const sio = require('socket.io')(3000);


sio.on('connection' , socket =>{ 
  console.log('connection' , socket.id);
});


const school = sio.of('/school'); 
school.on('connection' , socket =>{
  console.log('School channel' , socket.id);




});