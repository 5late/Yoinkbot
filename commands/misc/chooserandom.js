const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class OneThousandCommand extends commando.Command {
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
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
let choices =[]
choices.push(args)
console.log(choices)
const choice = args[Math.floor(Math.random() * args.length)];

      const embed = new Discord.MessageEmbed()
      .setTitle(`${choice}`)
      .setAuthor(`Random Choice Generator`)
      .setColor('#00CCFF')
      .setFooter(`Yoinkbot`,`https://cdn.discordapp.com/embed/avatars/1.png`)

      msg.channel.send(embed)
choices= [];
        
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