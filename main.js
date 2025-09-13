const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!, Successfully authenticated');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();


// Listening to all incoming messages
client.on('message_create', message => {
	console.log(message.body);
});

client.on('message_create', message => {
	if (message.body === '!ping') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'pong');
	}
	// another example
	if (message.body === 'good morning') {
		client.sendMessage(message.from, 'Good morning! Have a nice day :)');
	}
	// exact word of "how may i help you" will trigger the response
	{
	if (message.body === 'how may i help you') {
		client.sendMessage(message.from, 'I am a bot, I am here to help you!');
		// You can add more logic here to handle specific requests
	}
	}
});

