// Import discord.js and the environment variables
const { Client, GatewayIntentBits } = require('discord.js');
const { fs } = require('fs');
require('dotenv/config');

// Create a new client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Bot startup message
client.on('ready', () => {
    console.log('[!] Bot ready!');
});

// Login to the bot
client.login(process.env.TOKEN);