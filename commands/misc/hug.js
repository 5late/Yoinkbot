const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix = config.prefix

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

    msg.channel.send(msg.author.username + ' gave ' + text + ' a huge bear hug! <:happy:816424699906752562>')
    }
}