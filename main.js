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
		if (message.body.includes('support')) {
			client.sendMessage(message.from, 'Please contact our support team at support@cubeouttech.com');
		} else if (message.body.includes('sales')) {
			client.sendMessage(message.from, 'Please contact our sales team at sales@cubeouttech.com');

	}
	}
	// replies to messages containing "thank you" else if (message.body.toLowerCase().includes('thank you')) {
		client.sendMessage(message.from, "You're welcome! If you have any more questions, feel free to ask.");
	}

	// additional responses can be added here
	if (message.body === 'hello') {
		client.sendMessage(message.from, 'Hello! How May I assist you today?');
	}

	// more conditions and responses can be added as needed
	if (message.body === 'bye') {
		client.sendMessage(message.from, 'Goodbye! Have a great day!');
	}
	// end of message handling
	if (message.body === 'help') {
		client.sendMessage(message.from, 'Sure! Here are some commands you can use:\n1. !ping - to check if the bot is active\n2. good morning - to receive a morning greeting\n3. how may i help you - to get assistance\n4. thank you - to receive a polite response\n5. hello - to start a conversation\n6. bye - to end the conversation\n7. help - to see this message again');
	}
	// end of message handling
	if (message.body === 'joke') {
		client.sendMessage(message.from, 'Why did the scarecrow win an award? Because he was outstanding in his field!');
	}
	// console the successful reply
	console.log(`Replied to message from ${message.from} + ${name.message.body}`);
});
// response to indicate successful loading
console.log('main.js loaded successfully');

