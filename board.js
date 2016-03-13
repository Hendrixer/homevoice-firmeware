var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on('ready', function() {
  console.log('board ready');
  var button = new five.Button({
    pin: 18
  });

  button.on('down', function() {
    console.log('down');
  });

  button.on('up', function() {
    console.log('up');
  });

  button.on('hold', function() {
    console.log('hold');
  });
});
