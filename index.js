
var constants = require('./utils/constants');
var Firebase = require('firebase');
var express = require('express');
var run = require('child_process').spawn;
var _ = require('lodash');
require('./board');
var app = express();

var speak = _.throttle(function(message) {
  console.log(message);
  run('espeak', ['-v', 'en', message]);
}, 1000);

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
  var event = snapshot.val();
  var message = event.name + ' ' + event.value;
  speak(message);
});



