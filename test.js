const Discord = require('discord.js'); // Require discord.js
const HangmanGame = require('./index.js'); // Require HangmanGame
const client = new Discord.Client(); // Create client

const hangman = new HangmanGame({
  title: 'Test - Hangman', // Title of the embed while displaying the game. Default: Hangman
  color: 'RANDOM', // Color of the embed. Default: RANDOM
  timestamp: true, // Will set timestamp for embeds. Default: true
  gameOverTitle:, 'Game Over' // Will set the embed title of the game over embed. Default: 'Game Over'
  words: ['HI', 'TEST'] // Custom set of words. Deafult: './words.json'
});

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
