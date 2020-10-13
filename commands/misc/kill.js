const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class OneThousandCommand extends commando.Command {
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
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const ruser = msg.author;
      const rMember = msg.mentions.users.first();
const trumpImage =[` pushed a cactus up ${rMember} nose`,` peeled ${rMember} fingernails off one by one`,  `spooned ${rMember} brain out and ate it`, `  poured bleach into ${rMember} eyeballs`, ` flipped ${rMember} head 180`,]
const image = trumpImage[Math.floor(Math.random() * trumpImage.length)];

//const responses = ['Drink Bleach!', 'Fake NEWS!', 'VOTE!!!!!', 'CHINA!', 'CORRUPT!!!!!', 'MAKE AMERICA GREAT AGAIN!!!', 'OBAMAGATE!!!!', 'You are the enemy of the people.', 'LAW AND ORDER!!!!', 'RIGGED ELECTION!!!', 'CROOKED HILLARY!!', 'SLEEPY JOE!!']
//const response = responses[Math.floor(Math.random()* responses.length)];
console.log(args)
      const embed = new Discord.MessageEmbed()
      .setTitle('Kill machine.')
      //.setImage(image)
      .setDescription(msg.author.username+image)
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