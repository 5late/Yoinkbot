const commando = require('discord.js-commando');
const fs = require('fs')

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            group: 'misc',
            memberName: 'hug',
            description: 'Hugs the mentioned user.',
            args:[
                { 
                    key:'text',
                    prompt: 'Who would you like to kiss?',
                    type: 'string',
                }
              ],
            
        })
      }
    async run (msg, { text }) {
           
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const rMember = msg.mentions.users.first();

       msg.channel.send(msg.author.username + ' gave ' + text + ' a huge bear hug! ❤️❤️🤗🤗')
    }
}