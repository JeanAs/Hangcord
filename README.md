# Hangcord
Make your create hangman game on Discord easy

# Installation
```sh
npm install hangcord
```

# Features
- Super easy to use 😀
- More than 100 word ✅

# Examples
```js
const Discord = require('discord.js'); // Require discord.js
const HangmanGame = require('hangcord'); // Require HangmanGame
const client = new Discord.Client(); // Create client

const hangman = new HangmanGame({
  title: 'Hangman', // Title of the embed while displaying the game. Default: Hangman
  color: 'RANDOM' // Color of the embed. Default: RANDOM
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
```

## Picture
![hangman-1](/images/hangman-1.png)

![hangman-2](/images/hangman-2.png)



