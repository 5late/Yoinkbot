const commando = require('discord.js-commando');

module.exports = class StickBugCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stickbuglol',
            group: 'misc',
            memberName: 'stickbuglol',
            description: 'Get stick bugged LOL',
            aliases: ['sbl', 'stick']
            
        })
      }

async run (msg) {
           
      msg.delete()
      msg.channel.send('https://i.imgur.com/mfKEG74.gif?noredirect')

    }
}