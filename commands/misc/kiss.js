const commando = require('discord.js-commando');
const fs = require('fs')

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            group: 'misc',
            memberName: 'kiss',
            description: 'Kisses the mentioned user.',
            args:[
                { 
                    key:'text',
                    prompt: 'Who would you like to hug?',
                    type: 'string',
                }
              ],
            
        })
      }
    async run (msg, { text }) {
           
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const rMember = msg.mentions.users.first();

       msg.channel.send(msg.author.username + ' gave ' + text + ' a big smooch on the cheek 😗😗😘😘')
}
}