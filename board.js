var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on('ready', function() {
  console.log('board ready');
  var button = new five.Button({
    pin: 'GPIO24',
    holdtime: 1500
  });

  button.on('hold', function() {
    console.log('held');
  });
  button.on('press', function() {
    console.log('pressed');
  });
  button.on('release', function() {
    console.log('release');
  });
});
