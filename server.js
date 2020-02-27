'use strict';

const socketIo = require('socket.io')(3000);


socketIo.on('connection', socket => {
  console.log(`connected to: ${socket.id}`);
  socket.on('student-speech', payload =>{
    socketIo.emit('message', payload);
  });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const school = socketIo.of('/school');

school.on('connection', socket =>{
  socket.on('school-speech', payload=>{
    school.emit('message', payload);
  });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const teacher = socketIo.of('/teacher');

teacher.on('connection', socket =>{
  socket.on('teacher-speech', payload=>{
    teacher.emit('message', payload);
  });
});