const commando = require('discord.js-commando');
const prefix = '?'
const path = require('path')

module.exports = class WeatherCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'google',
            group: 'misc',
            memberName: 'google',
            description: 'Search Google! Returns link.',
        })
    }
    
async run (msg) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    msg.reply(`https://www.google.com/search?q=${args.toLowerCase()}`)
}
}
