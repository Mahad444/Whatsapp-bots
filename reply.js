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