const Discord = require('discord.js'); // Require discord.js
const HangmanGame = require('./index.js'); // Require HangmanGame
const client = new Discord.Client(["MANAGE_MESSAGES"]); // Create client

const hangman = new HangmanGame(client);

// Config

client.config = {
    token: "TOKEN"
}

// Ready Event

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Message Event

client.on('message', msg => {
    if (msg.content.toLowerCase() === '!test') {
        msg.reply("Test command work!")
    }

    else if (msg.content.toLowerCase() === '!hangman') {
        hangman.newGame(msg);
    }
})
 
// Login the bot
client.login(client.config.token)