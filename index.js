// var raspi = require('raspi-io');
// var five = require('johnny-five');
var constants = require('./utils/constants');
var Firebase = require('firebase');
var express = require('express');

var app = require('express');

app.listen(3500);
var deviceEventsStream = new Firebase(constants.eventsUrl);

deviceEventsStream.on('child_added', function(snapshot) {
  console.log(snapshot.val());
});
// var board = new five.Board({
//   io: new raspi()
// });


