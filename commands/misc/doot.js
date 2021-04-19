const commando = require('discord.js-commando');
const prefix  = '?'

module.exports = class DootCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'doot',
            group: 'misc',
            memberName: 'doot',
            description: 'Doot a message',
            args:[
              { 
                  key:'text',
                  prompt: 'What would you like me to doot?',
                  type: 'string',
              }
          ]
        })
    }

async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

    let finalsend = []

    if (args.length > 14){

        msg.channel.send('too long')

    }else{

        var i;

        text.split(' ')

        for (i = 0; i < args.length; i++) {

            finalsend.push(args[i])

            finalsend.push('🎺 💀')

        }

        msg.channel.send(finalsend.join(" "))

        }
    }
}