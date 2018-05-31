var tmi = require('tmi.js');
var apikey = require(__dirname + '/apikey.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "pemdasBot",
		password: apikey.apikey
	},
	channels: ["mrpandamania"]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
	if(message === "!twitter") {
		client.action("mrpandamania", "twitter.com");	
	}
	
})

client.on("connected", function(address, port) {
	client.action("i_st", "Hello I'm a noob bot and you are a total noob");
	client.action("mrpandamania", "Hello I'm a noob bot and you are a total noob");
});