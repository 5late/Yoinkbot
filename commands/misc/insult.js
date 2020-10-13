const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class OneThousandCommand extends commando.Command {
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

//const responses = ['Drink Bleach!', 'Fake NEWS!', 'VOTE!!!!!', 'CHINA!', 'CORRUPT!!!!!', 'MAKE AMERICA GREAT AGAIN!!!', 'OBAMAGATE!!!!', 'You are the enemy of the people.', 'LAW AND ORDER!!!!', 'RIGGED ELECTION!!!', 'CROOKED HILLARY!!', 'SLEEPY JOE!!']
//const response = responses[Math.floor(Math.random()* responses.length)];
console.log(args)
      const embed = new Discord.MessageEmbed()
      .setTitle('Insult machine.')
      //.setImage(image)
      .setDescription(text + image)
      //.setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected contact the bot owner with the command '?owner'")

      msg.channel.send(embed)
        
        
        const id = msg.author.id
        console.log(id)
        const name = msg.member.user.tag;
        console.log(name)
        var information = [];
        information.push(name, id)
        var savedinfo = fs.readFileSync("./information.txt", {"encoding": "utf-8"});
        
      var newinfo = savedinfo;
    fs.writeFileSync("information.txt", newinfo.toString())
    
    fs.appendFileSync("information.txt", information.toString())

    fs.readFile("./information.txt", function (err, data) {
        if (err) throw err;
        var datata = data.toString('utf-8')
        if(data.includes('Xurxx#7879')){
         console.log((datata.length / 29) - .689655172413794)
        }
      });
    }
}