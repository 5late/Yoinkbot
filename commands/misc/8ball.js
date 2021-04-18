const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class EightBallCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'misc',
            memberName: '8ball',
            description: 'Answer Yes/No questions',
            args:[
              { 
                  key:'text',
                  prompt: 'What would you like to ask Yoinkbot?',
                  type: 'string',
              }
          ]
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
const eightball =['Ask again', 'Never', 'For sure', 'Without a doubt', 'No possibility', 'Absolutely not', 'My magic tells me yes', 'There is a chance', 'Not in your lifetime', 'Is the sky blue?', 'Not worth asking.']
const answer = eightball[Math.floor(Math.random() * eightball.length)];


console.log(args)
      const embed = new Discord.MessageEmbed()
      .setTitle(`${text}:`)
      .setAuthor(msg.author.username, msg.author.displayAvatarURL())
      .setDescription(answer)
      .setFooter(`Yoinkbot`, `https://cdn.discordapp.com/embed/avatars/1.png`)

      msg.channel.send(embed)
}
}