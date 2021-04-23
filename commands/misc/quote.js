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
        function getIdFromMention(mention) {
            if (!mention) return;
    
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
                
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
            }
            mention = client.users.fetch(mention)
            return mention;
        }
        function getContentFromID(ID) {
            let channel = msg.channel.id
            ID = client.channels.cache.get(channel)
            return ID;
        }

        if(args.length > 1){
            let finalMessages = await text.replace(args[0], '')

            await msg.channel.send(finalMessages + `\n-${rMember}, ${new Date().getFullYear()}`)
        } else {
            try {
                const user = await getIdFromMention(args[0]);
                if (!user) return msg.channel.send('Oh no, invalid user ID.');
              
                const lastMessage = getContentFromID(rMember.lastMessageID)
                if (!lastMessage) return msg.channel.send('No messages from this user found.');
              
                msg.channel.send(lastMessage.content, lastMessage.embed, lastMessage.attachments);
              } catch(err) {
                console.error(err);
              }
        }
    }
}