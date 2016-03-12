var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on('ready', function() {
  console.log('board ready');
  var button = new five.Button({
    pin: 'GPIO22',
    isPullup: true
  });

  button.on('down', function() {
    console.log('down');
  });
  button.on('up', function() {
    console.log('up');
  });
});
