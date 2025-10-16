// reply from main.js
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');

// Path to the session file
const SESSION_FILE_PATH = path.join(__dirname, 'session.json');

// Load the session data if it exists
let sessionData;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Create a new WhatsApp client instance
const client = new Client({
    session: sessionData
});

// answers and saves the session
client.on('qr', (qr) => {
    // Generate and display the QR code in the terminal
    qrcode.generate(qr, { small: true });
});

client.on('authenticated', (session) => {
    // Save the session data to a file
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error('Error saving session:', err);
        } else {
            console.log('Session saved successfully.');
        }
    });
});

client.on('auth_failure', (msg) => {
    // Authentication failure message
    console.error('Authentication failure:', msg);
});

// Log when the client is ready
client.on('ready', () => {
    console.log('Client is ready!');
});

// Listen for incoming messages and reply
client.on('message', async (msg) => {
    console.log(`Message from ${msg.from}: ${msg.body}`);
    try {
        await msg.reply('Hello! This is an automated reply.');
        console.log('Replied to message.');
    } catch (error) {
        console.error('Error replying to message:', error);
    }
});
// Initialize the client
client.initialize();

// Export the client for use in other modules if needed
module.exports = client;

// reply from main.js


// Use the client to send a message
client.sendMessage('recipient-id', 'Hello from main.js!');

// reply from main.js

// Use the client to send a message
client.sendMessage('recipient-id', 'Hello from main.js!');