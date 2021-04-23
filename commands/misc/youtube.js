const commando = require('discord.js-commando');
const prefix = '?'

module.exports = class YouTubeSearchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'youtube',
            group: 'misc',
            memberName: 'youtube',
            description: 'Search YouTube. Returns link.',
        })
    }

async run (msg) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    msg.reply(`https://www.youtube.com/results?search_query=${args}`)
}
}
