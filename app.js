'use strict';

const clientSpcketIo = require('socket.io-client');

const faker = require('faker');

const teacher = clientSpcketIo.connect('http://localhost:3000/teacher');
const school = clientSpcketIo.connect('http://localhost:3000/school');
const student = clientSpcketIo.connect('http://localhost:3000');


setInterval(() =>{
  student.emit('student-chat', faker.hacker.phrase());
}, 8000);

setInterval(() =>{
  school.emit('school-chat', faker.hacker.phrase());
}, 3000);

setInterval(() =>{
  teacher.emit('teacher-chat', faker.hacker.phrase()); 
}, 5000);