const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const Discord = require('discord.js')
const client = new Discord.Client()
client.token = config.token

module.exports = class QuoteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            group: 'misc',
            memberName: 'quote',
            description: 'Quote something, by someone.',
            args:[
                { 
                    key:'text',
                    prompt: 'What would you like to say?',
                    type: 'string',
                }
              ]
            
        })
      }

async run (msg, { text }) {   
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let rMember = msg.guild.member(msg.mentions.users.first())

        if(args.length > 1){
            let finalMessages = await text.replace(args[0], '')

            await msg.channel.send(finalMessages + `\n-${rMember}, ${new Date().getFullYear()}`)
        } else {
            msg.channel.send(`You haven't given me anything to quote from this user: ${args[0]}`)
        }
    }
}