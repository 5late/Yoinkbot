const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'compliment',
            group: 'misc',
            memberName: 'compliment',
            description: 'Compliment someone! Defaults to self.',
        })
    }
async run (msg, { text }) {
      
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

    const trumpImage =['You are a gift to others', 'I appreciate you', 'You deserve a hug right now.','You light up the room', 'You light up a room', 'You are an awesome friend', 'You bring out the best in people', 'You are making difference.', 'I may be a bot, but I am inspired by you.','On a scale from one to ten, you are an eleven.', 'You are more helpful than you realize.']
    const image = trumpImage[Math.floor(Math.random() * trumpImage.length)];

if(!args.length){
        const person = msg.author.username;
        
    const embed = new Discord.MessageEmbed()
    //.setTitle('Compliment machine.')
      .setTitle(msg.author.username + image)
 
      msg.channel.send(embed)
    
} else {
    const person = msg.members. this.client.users.fetch(args);
    const embed = new Discord.MessageEmbed()
      .setTitle('Compliment machine.')
      //.setImage(image)
      .setDescription(person + ' ' + image)
      //.setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected contact the bot owner with the command '?owner'")

      msg.channel.send(embed)
}
    }
}