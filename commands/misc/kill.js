const commando = require('discord.js-commando');
const Discord = require('discord.js')
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const prefix = config.prefix

module.exports = class KillCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kill',
            group: 'misc',
            memberName: 'kill',
            description: 'Kill someone in a dramatic way.',
            args:[
              { 
                  key:'text',
                  prompt: 'Who would you like to kill?',
                  type: 'string',
              }
          ]
        })
    }
async run (msg) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      const rMember = msg.mentions.users.first();
      
      const kills =[` pushed a cactus up ${rMember} nose`,` peeled ${rMember} fingernails off one by one`,  `spooned ${rMember} brain out and ate it`, `  poured bleach into ${rMember} eyeballs`, ` flipped ${rMember} head 180`,]
      const kill = kills[Math.floor(Math.random() * kills.length)];

      const embed = new Discord.MessageEmbed()
      .setTitle('Kill machine.')
      .setDescription(msg.author.username+kill)
      .setFooter(`Yoinkbot`, config.yoinkbotPFP)

      msg.channel.send(embed)
    }
}