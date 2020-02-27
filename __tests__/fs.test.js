'use strict';

jest.mock('fs');

const events = require('../src/events.js');

require('../src/error.js');
require('../src/logger.js');
const mocks = require('../__mocks__/fs.js');




let readFile = mocks.readFile;
let writeFile = mocks.writeFile;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



describe('events error test', () => {

  it('console log the error when happend', () => {
    expect(events.emit('error', 'wrong', 'sorrryyyy')).toBeTruthy();
  });
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


describe('events log', () => {

  it('when message save can log a message', () => {
    expect(events.emit('log', 'saved ..thanks ', 'succssesful')).toBeTruthy();
  });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


describe('read File', () => {
  it('Read a file', () => {
    let fileRead = 'readFile.txt';
    return readFile(fileRead, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(fileRead));
    });
  });
});





describe('write File', () => {

  it('Write a file', () => {
    let fileWrite = 'writeFile.txt';
    return writeFile(fileWrite, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(fileWrite));
    });
  });
});







































//Sohad