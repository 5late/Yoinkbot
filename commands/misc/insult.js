const commando = require('discord.js-commando');
const Discord = require('discord.js')
const prefix  = '?'

module.exports = class InsultCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'insult',
            group: 'misc',
            memberName: 'insult',
            description: 'Choose a random insult to hurl at someone',
            args:[
              { 
                  key:'text',
                  prompt: 'Who would you like to insult?',
                  type: 'string',
              }
          ]
        })
    }
async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
    const trumpImage =['You are proof that God has a sense of humour', 'You are as useless as the ueue in queue', 'Mirrors cant talk, lucky for you, they cant laugh either.','You are the reason the gene pool needs a lifeguard', 'If I had a face like yours I would sue my parents', 'Someday, you will go far, adn I hope you stay there.', 'If laughter is medicine, your face must be the most curing in the world.', 'So, a thought justr crossed your mind? Must have been a long and lonely journey.', 'If I wanted to kill myself I would climb your ego and jump into your IQ','When you were born, the doctor threw you out the window and the window threw you back']
    const image = trumpImage[Math.floor(Math.random() * trumpImage.length)];

      const embed = new Discord.MessageEmbed()
      .setTitle('Insult machine.')
      .setDescription(text + image)

      msg.channel.send(embed)
    }
}