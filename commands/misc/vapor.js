const commando = require('discord.js-commando');
const prefix  = '?'

module.exports = class VaporCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'vapor',
            group: 'misc',
            memberName: 'vapor',
            description: 'Doot a message',
            args:[
              { 
                  key:'text',
                  prompt: 'What would you like me to vapor-?',
                  type: 'string',
              }
          ]
        })
    }
    async run (msg, { text }) {
        var finalSend = [];
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

        finalSend.push(text.toUpperCase())
      msg.channel.send(finalSend.join(' '))
    }
}