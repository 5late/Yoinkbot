const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix = config.prefix

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
