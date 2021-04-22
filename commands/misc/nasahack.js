const commando = require('discord.js-commando');
const fs = require('fs')

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hacknasa',
            group: 'misc',
            memberName: 'hacknasa',
            description: 'Hacks Nasa.',
        })
    }
async run (msg) {     
        msg.reply('Entering the system...')
        await new Promise(r => setTimeout(r, 1500));
        msg.reply('Searching for memes on NASA scientists computers...')
        await new Promise(r => setTimeout(r, 1500));
        msg.reply('Downloading rickroll.mp4')
        await new Promise(r => setTimeout(r, 1500));
        msg.reply('Sending a rocket to space...')
        await new Promise(r => setTimeout(r, 1500));
        msg.reply('You now have access to Agent Vs computer. To move forward use command `?nasahack`')
        await new Promise(r => setTimeout(r, 1500));
  }
}