var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on('ready', function() {
  console.log('board ready');
})
