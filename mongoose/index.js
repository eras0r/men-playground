var mongoose = require('mongoose');

// set promise provider to bluebird
mongoose.Promise = require('bluebird');

var options = {
  user: 'lost',
  pass: 'b6DNfHABKU',
  auth: {
    authdb: 'lost'
  }
};

mongoose.connect('mongodb://localhost/lost', options, function (err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});
