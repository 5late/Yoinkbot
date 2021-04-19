const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class ChooseCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'choose',
            group: 'misc',
            memberName: 'choose',
            description: 'Choose something random from given choices.',
            args:[
              { 
                  key:'text',
                  prompt: 'What would you like me to randomly choose?',
                  type: 'string',
              }
            ]
          }
        )
      }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      
      let choices =[]
      
      choices.push(args)
      
      const choice = args[Math.floor(Math.random() * args.length)];

      const embed = new Discord.MessageEmbed()
      .setTitle(`${choice}`)
      .setFooter(`Random Choice Generator`, msg.author.displayAvatarURL())
      .setColor('#00CCFF')
      .setAuthor(`Yoinkbot`,`https://cdn.discordapp.com/embed/avatars/1.png`)

      msg.channel.send(embed)
      choices= [];
  }
}