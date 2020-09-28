const commando = require('discord.js-commando');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '?';
const fs = require('fs')



module.exports = class KickCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rps',
            group: 'misc',
            memberName: 'rps',
            description: 'play rock paper scissors',
        })
    }
    async run (msg) {
        if (msg.author.bot) return;
        if (msg.content.indexOf(prefix) !== 0) return;
    
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return msg.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return msg.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return msg.reply("It's a tie! We had the same choice.");
        let botwon = false;
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') {let botwon = true; break}
                else return msg.reply('I chose ' + result + ' and so you won!');
                }
            case 'paper': {
                if (result === 'scissors') {let botwon = true; break}
                else return msg.reply('I chose ' + result + ' and so you won!');       
            }
            case 'scissors': {
                if (result === 'rock') {let botwon = true; break}
                else return msg.reply('I chose ' + result + ' and so you won!');
            }
            default: {
                msg.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
            
        }
        var botwin = fs.readFileSync("./rpsbotwon.txt", {"encoding}": "utf-8"});
        if(botwon = true) msg.reply('I chose ' + result + ' so I won!');{
            var botwins = botwin;
                fs.writeFileSync("rpsbotwon.txt", botwin)
                botwins += 1;
                
            var botwincounter = botwins
  
        fs.writeFileSync("rpsbotwon.txt", botwincounter.toString());
        console.log('Yoinkbot wins: ' + botwin.length)
        msg.channel.send('Ha! Yoinkbot has won ' + botwin.length + ' times!')
                }
                
    }
    
}   