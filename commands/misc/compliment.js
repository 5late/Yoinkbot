const commando = require('discord.js-commando');
const Discord = require('discord.js')
const prefix = '?'
const path = require('path');

module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'compliment',
            group: 'misc',
            memberName: 'compliment',
            description: 'Compliment someone! Defaults to self.',
        })
    }
async run (msg) {
      
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

    const compliments =['You are a gift to others', 'I appreciate you', 'You deserve a hug right now.','You light up the room', 'You light up a room', 'You are an awesome friend', 'You bring out the best in people', 'You are making difference.', 'I may be a bot, but I am inspired by you.','On a scale from one to ten, you are an eleven.', 'You are more helpful than you realize.']
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];

if(!args.length){
    const embed = new Discord.MessageEmbed()
      .setTitle(msg.author.username + image)
 
      msg.channel.send(embed)
    
} else {
    function getIdFromMention(mention) {
        if (!mention) return;

        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);
            
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
    
        }
        return mention;
    }
    const person =  getIdFromMention(args[0]);
    const embed = new Discord.MessageEmbed()
      .setTitle('Compliment machine.')
      .setDescription(`<@${person}> ${compliment}`)

      msg.channel.send(embed)
}
}
}