const commando = require('discord.js-commando');
const fs = require('fs');
const Discord = require('discord.js')
const { DiscordAPIError } = require('discord.js');


module.exports = class OneThousandCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'misc',
            memberName: 'invite',
            description: 'Send YB invite link',
            aliases: ['invitelink', 'beta']
            
        })
      }
async run (msg) {
    
  const embed = new Discord.MessageEmbed()
    .setTitle('Invite Yoinkbot to your server!')
    .setDescription('Did you know we have a beta bot? It gets bleeding edge updates before Yoinkbot does!')
    .addField('Yoinkbot Link ⬇️', '[Click Here](https://discord.com/oauth2/authorize?client_id=724989158891847700&permissions=2147483639&scope=bot)')
    .addField('Yoinkbot Beta Link ⬇️', '[Click Here](https://discord.com/api/oauth2/authorize?client_id=744940398006370444&permissions=8&scope=bot)')
    .setFooter('Owner: Xurxx#7879 | ?owner')

  msg.channel.send(embed)
  msg.channel.send("||The beta bot may appear offline often, due to it being for testing. Contact the bot owner ``?owner`` for more information.||")
  }
}