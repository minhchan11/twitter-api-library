var config = require('./config');

var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};
	var success = function (data) {
    	console.log('Data [%s]', data);
	};

var Twitter = require('twitter-node-client').Twitter;
var twitter = new Twitter(config);

functions = {
 search:function() {
   twitter.getUserTimeline({ screen_name: 'rihanna', count: '10'}, error, success);
 }
}

module.exports = functions;
