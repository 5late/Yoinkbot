const commando = require('discord.js-commando');
const Discord = require('discord.js')
const prefix  = '?'

module.exports = class RollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'misc',
            memberName: 'roll',
            description: 'Roll a random number between two given numbers',
            args:[
              { 
                  key:'text',
                  prompt: 'Please enter two numbers.',
                  type: 'string',
              }
          ]
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();


      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      }

      const randomNumber = getRandomIntInclusive(args[0], args[1])
      
      const embed = new Discord.MessageEmbed()
      .setTitle(randomNumber)
      msg.channel.send(embed)
    }
}