// reply from main.js
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');

// Path to the session file
const SESSION_FILE_PATH = path.join(__dirname, 'session.json');

// Load the session data if it exists