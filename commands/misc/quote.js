const commando = require('discord.js-commando');
const fs = require('fs')

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
        let rMember = msg.guild.member(msg.mentions.users.first())// || msg.guild.members.cache.get(args[0]))

        let finalMessages = await text.replace(args[0], '')

        await msg.channel.send(finalMessages + `\n-${rMember}, ${new Date().getFullYear()}`)
    }
}