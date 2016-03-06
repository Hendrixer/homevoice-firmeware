// var raspi = require('raspi-io');
// var five = require('johnny-five');
var constants = require('./utils/constants');
var Firebase = require('firebase');
var express = require('express');
var run = require('child_process').spawn;
var app = express();

app.listen(3500);
var deviceEventsStream = new Firebase(constants.eventsUrl);
var initialEventsLoad = false;
deviceEventsStream.on('child_added', function(snapshot) {

  if (!initialEventsLoad) {
    setTimeout(function(){
      initialEventsLoad = true;
    });
    return;
  }
  console.log(snapshot.val());
});
// var board = new five.Board({
//   io: new raspi()
// });

