const commando = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class RouletteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roulette',
            group: 'misc',
            memberName: 'roulette',
            description: 'Ask a question and the bot will return with the username of someone.',
            args:[
              { 
                  key:'text',
                  prompt: 'What would you like to ask?',
                  type: 'string',
              }
            ]
            
        })
      }

async run (msg, { text }) {
    
        let winner = msg.guild.members.cache.random()
        let winnertag = winner.user.id
        let winnerpfp = winner.user.displayAvatarURL()

        

      const embed = new Discord.MessageEmbed()
      .setAuthor(`${msg.author.username}`, msg.author.displayAvatarURL())
      .setTitle(`${text}:`)
      .setDescription(`<@${winnertag}>`)
      .setThumbnail(winnerpfp)
      .setFooter(`Yoinkbot`, `https://cdn.discordapp.com/embed/avatars/1.png`)

      msg.channel.send(embed)
    }
}